import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext' // 👈 importa el contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* 👈 envolvemos la app */}
      <App />
    </AuthProvider>
  </React.StrictMode>
)
