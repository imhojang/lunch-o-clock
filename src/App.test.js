import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './modules'

import App from './App'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App store={store} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
