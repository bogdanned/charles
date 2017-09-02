import React from 'react'
import PropTypes from 'prop-types'
import "isomorphic-fetch"
import NotificationSystem from 'react-notification-system'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { reducer as formReducer } from 'redux-form'
import {connectRoutes} from 'redux-first-router'
import queryString from 'query-string'
import {render} from 'react-dom'
import {AppContainer} from "react-hot-loader"
import {Provider} from "react-redux"
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import {ThemeProvider} from 'styled-components'

const history = createHistory()


const { reducer, middleware, enhancer } = connectRoutes(history, routesMap, {
  querySerializer: queryString,
})

const rootReducer = combineReducers({
  location: reducer,
  form: formReducer.plugin({
    wageCalculation: wagesReducer,
    servicesForm: servicesFormReducer
  }),
  leads: leadsReducer,
  services: servicesReducer,
  pageData: pageDataReducer,
  home: homeReducer,
  campaigns: campaignsReducer
})

let store = createStore(rootReducer, composeWithDevTools(
  enhancer,
  applyMiddleware(
    thunk.withExtraArgument({client,routeQueryMap}),
    middleware,
  ),
))

const theme = {
  brandColor: '#8FBE00',
  secondaryBrandColor: '#bfd867',
  primaryDark: 'rgba(102, 102, 102, 1)',
  primaryGrey: 'rgba(153, 153, 153, 1)',
  secondaryGrey: 'rgba(204, 204, 204, 1)',
  activeColor: '#799712',
  hoverColor: '#8CAD15',
  tooltipColor: 'white',
  size: {
    tablet: "769px",
    mobile: "550px",
    computer: "1024px"
  }
}


const renderApp = (Component) => {
  render(<AppContainer>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NotificationSystemProvider>
          <h1> Magnus Magnificus </h1>
        </NotificationSystemProvider>
      </Provider>
    </ThemeProvider>
  </AppContainer>, document.getElementById("app"))
}

renderApp(App)

if(module.hot){
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default
    renderApp(NextApp)
  })
}
