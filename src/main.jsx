import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ThemeProvider from "@/components/theme-provider.jsx";
import Authorization from './Authorization.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Authorization/>
      </ThemeProvider>
  </React.StrictMode>,
)
