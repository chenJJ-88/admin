import React from 'react'
import ReactDOM from 'react-dom/client'
import RootRoutes from '@@/config/RootRoutes'
import Routers from '@@/config/router1'
import './index.css'
import { ConfigProvider } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <Router>
      {
        <Routers></Routers>
        // <RootRoutes></RootRoutes>
      }
    </Router>
  </ConfigProvider>

)
