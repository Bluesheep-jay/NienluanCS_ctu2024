import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './scripts/animation.js'
import './scripts/algorithms.js'
import './components/Header.jsx'
import './components/Bar.jsx'
import './scripts/headerBtn.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
