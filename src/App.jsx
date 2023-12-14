import React from 'react'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import BestSeller from './components/BestSeller.jsx'
import MenuIndex from './components/MenuIndex.jsx'
import BanIcons from './components/BanIcons.jsx'
import BanAsados from './components/BanAsados.jsx'
import BanGalle from './components/BanGalle.jsx'



export default function App() {
  return (
    <>
    <NavBar/>
    <Header />
    <BestSeller/>
    <MenuIndex/>
    <BanIcons/>
    <BanAsados/>
    <BanGalle/>
    </>
  )
}
