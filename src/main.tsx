import React from 'react'
import ReactDOM from 'react-dom/client'
import RootRoutes from '@@/config/RootRoutes'
import App from './App'
import './index.css'
import { ConfigProvider } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    {
      // RootRoutes()
      <RootRoutes></RootRoutes>
    }
  </Router>,
)
