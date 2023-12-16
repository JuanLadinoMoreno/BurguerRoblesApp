import React from 'react'
import { Link } from 'react-router-dom';

// import imgLogo from '../assets/img/logoSl.png'

export default function NavBar() {
  return (
    <>
    <nav id="top-nav">

        <Link to='/'>
            <img src='../../public/img/logoSl.png' className='nav-logo'  alt=""/>
        </Link>
        <ul>
            <Link to='/'>Inicio</Link>
            <Link to='/menu'>Menu</Link>
            <li><a href="pages/about.html">Quienes somos</a></li>
            <li><a href="pages/asados.html">Asados</a></li>
            <li><a href="pages/eventos.html">Eventos</a></li>
        </ul>


        <div className='icons '>
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""> <i className="fab fa-instagram"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
        </div>

    

        <div className='toogle-btn'>
            <i className='fa-solid fa-bars'></i>
        </div>

    </nav>

    <div className='dropdown-menus'>
        <ul>
            <a href="./index.html">Inicio</a>
            <a href="pages/menu.html">Menu</a>
            <a href="pages/about.html">Quienes somos</a>
            <a href="pages/asados.html">Asados</a>
            <a href="pages/eventos.html">Eventos</a>
        </ul>
    </div>
    </>
    
  );
}
