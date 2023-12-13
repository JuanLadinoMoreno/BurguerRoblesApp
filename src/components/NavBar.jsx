import React from 'react'
// import imgLogo from '../assets/img/logoSl.png'

export default function NavBar() {
  return (
    <>
    <nav id="top-nav">
        <a className=' lognav' href="./index.html">
            <img src='../../public/img/logoSl.png' className='nav-logo'  alt=""/>
        </a>

        <ul>
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="pages/menu.html">Menu</a></li>
            <li><a href="pages/about.html">Quienes somos</a></li>
            <li><a href="pages/asados.html">Asados</a></li>
            <li><a href="pages/eventos.html">Eventos</a></li>
        </ul>


        <div className='icons '>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""> <i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-twitter"></i></a>
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
