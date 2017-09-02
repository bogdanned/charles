import {render} from 'react-dom'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from "react-redux"
import {composeWithDevTools} from 'redux-devtools-extension'

import App from "./components/App"
import chatReducer from "./reducers/chat"

const rootReducer = combineReducers({
  chat: chatReducer,
})

let store = createStore(rootReducer, composeWithDevTools(
  enhancer,
  applyMiddleware(
    thunk.withExtraArgument({client,routeQueryMap}),
    middleware,
  ),
))

const theme = {
  brandColor: "#3498db",
  primaryColor: "#ECECEC",
  secondaryColor: "white"
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
