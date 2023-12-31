import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {gsap} from "gsap"
gsap.registerPlugin(ScrollTrigger)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
