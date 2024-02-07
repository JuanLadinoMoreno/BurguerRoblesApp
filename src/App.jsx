import MainRouter from './router/MainRouter.jsx'
import {  CarProvider } from './context/CarContext.jsx'
import { Suspense } from 'react'



//PONER EL MainRouter DENTRO DEL Suspense

export default function App() {
  return (
    <CarProvider>
      <Suspense fallback={''}> 
        <MainRouter/>
        {/* <Outlet/> */}
      </Suspense>

      
    </CarProvider>


    
  )
}
