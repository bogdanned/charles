import "isomorphic-fetch"
import express from "express"
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from "cors"

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

function loginCookieOpts(req){
  return {path: "/", domain: req.headers["host"], secure: true}
}

export default (app) => {
  app.use(cors({
    origin: "*"
  }))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(cookieParser())

  app.get("/ping", (req,res) => {
    res.status(200)
    res.end()
  })

  app.get("/login-success", (req,res) => {
    // make sure no old cookie exist
    res.clearCookie("token", {...loginCookieOpts(req), domain: ".lokalleads.de"})

    res.cookie("token", req.query.token, {path: "/", domain: req.headers["host"], secure: true, expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90)})

    if(process.env.RUNTIME_ENV === "dev")
      res.cookie("token", req.query.token, {path: "/", domain: `${req.headers["host"]}:9001`, secure: true, expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90)})

    res.redirect(req.query.origin ? decodeURIComponent(req.query.origin) : "/")
  })

  app.get("/logout", (req,res) => {
    res.clearCookie("token", loginCookieOpts(req))
    res.redirect("/")
  })

  app.use(async (req,res,next) => {
    if(req.path.match(/(hot-update\.json|hot-update\.js)$/)){
      next()
      return
    }

    const {token} = req.cookies,
          clientId = process.env.LOGIN_CLIENT_ID,
          origin = encodeURIComponent(req.url)

    if(token){
      const domain = process.env.RUNTIME_ENV === "dev" ? "www.lokalleads.de" : process.env.API_DOMAIN

      const {ok} = await fetch(`https://${domain}/validateToken`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Host: process.env.API_DOMAIN,
        }
      })

      if(ok)
        return next()

      res.clearCookie("token", loginCookieOpts(req))
    }

    res.redirect(`https://${process.env.API_DOMAIN}/login?clientId=${clientId}&origin=${origin}`)
  })

  app.get("/*.js", (req,res,next) => {
    if(req.path.indexOf("hot-update") === -1){
      req.url = req.url + ".gz"
      res.set('Content-Encoding', 'gzip')
    }
    next()
  })

  app.use(express.static('public'))
}
