import {render} from 'react-dom'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from "react-redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducer as reduxFormReducer } from 'redux-form'
import thunk from "redux-thunk"

import '../../node_modules/react-typist/dist/Typist.css'

import App from "./components/App"
import chatReducer from "./reducers/chat"

const rootReducer = combineReducers({
  chat: chatReducer,
  form: reduxFormReducer, // mounted under "form"
})


let store = createStore(rootReducer, composeWithDevTools(
))


const theme = {
  brandColor: "#27AE61",
  primaryColor: "#F5F5F5",
  secondaryColor: "white",
  secondaryFontColor: "#95a5a6",
  terciaryFontColor: "#4F4F4F"
}


const renderApp = () => {
  render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App/>
      </Provider>
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
