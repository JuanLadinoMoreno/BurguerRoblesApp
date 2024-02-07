import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from '../pages/Home'
import NavBar from '../components/NavBar'
// import Menu from '../pages/Menu'
import Footer from '../components/Footer.jsx'
// import { Category } from '../pages/Category.jsx'
// import DetailProduct from '../pages/DetailProduct.jsx'
// import { Cart } from '../pages/Cart.jsx'
// import { About } from '../pages/About.jsx'
// import { Grill } from '../pages/Grill.jsx'



const Home = lazy(() => import("../pages/Home"));
const Menu = lazy(() => import("../pages/Menu"));
const Category = lazy(() => import("../pages/Category"));
const DetailProduct = lazy(() => import("../pages/DetailProduct"));
const Cart = lazy(() => import("../pages/Cart"));
const About = lazy(() => import("../pages/About"));
const Grill = lazy(() => import("../pages/Grill"));




  

export default function MainRouter() {
  return (
    // BrowserRouter trabaja con children, su hijo es Routes
    <BrowserRouter>
      {/* <Suspense></Suspense> */}
        <NavBar />
      
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/category/:id' element={<Category />} />
        <Route path='/menu/item/:id' element={<DetailProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/grill' element={<Grill />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
