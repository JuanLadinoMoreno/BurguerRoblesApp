
import Header from '../components/Header.jsx'
import BestSeller from '../components/BestSeller.jsx'
import MenuIndex from '../components/MenuIndex.jsx'
import BanIcons from '../components/BanIcons.jsx'
import BanAsados from '../components/BanAsados.jsx'
import BanGalle from '../components/BanGalle.jsx'
import BanEventos from '../components/BanEventos.jsx'
import Footer from '../components/Footer.jsx'
import { useEffect } from 'react'


export default function Home() {

    useEffect(() => {
        document.title = 'Burguer Robles - Home';
    });

  return (
    <>
    <Header />
    <BestSeller/>
    <MenuIndex/>
    <BanIcons/>
    <BanAsados/>
    <BanGalle/>
    <BanEventos/>
    <Footer/>
    </>
  )
}
