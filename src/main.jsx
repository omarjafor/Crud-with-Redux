import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root'
import { RouterProvider } from 'react-router-dom'
import Router from './Router'
import { Provider } from 'react-redux'
import store from './Redux/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router}>
        <Root />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
