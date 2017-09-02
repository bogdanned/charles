import {render} from 'react-dom'
import React from 'react'
import {ThemeProvider} from 'styled-components'

import App from "./components/App"


const theme = {
  brandColor: "#3498db",
  primaryColor: "#ECECEC",
  secondaryColor: "white"
}

const renderApp = () => {
  render(
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
    , document.getElementById("app"))
}

renderApp(App)

if(module.hot){
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default
    renderApp(NextApp)
  })
}
