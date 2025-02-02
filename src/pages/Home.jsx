import { useEffect } from 'react'
import Header from '../components/Pages/Home/Header.jsx'
import BestSeller from '../components/Pages/Home/BestSeller.jsx'
import MenuIndex from '../components/Pages/Home/MenuIndex.jsx'
import BanIcons from '../components/Pages/Home/BanIcons.jsx'
import BanAsados from '../components/Pages/Home/BanAsados.jsx'
import BanGalle from '../components/Pages/Home/BanGalle.jsx'
import BanEventos from '../components/Pages/Home/BanEventos.jsx'
import HidenButtons from '../components/HidenButtons.jsx'



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
    <HidenButtons/>
    </>
  )
}
