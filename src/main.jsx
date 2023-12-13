import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/styles.scss'
import ReactDOM from 'react-dom/client'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import BestSeller from './components/BestSeller.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Header />
    <BestSeller/>
  </React.StrictMode>,
)
