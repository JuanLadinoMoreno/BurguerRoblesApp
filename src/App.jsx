import MainRouter from './router/MainRouter.jsx'
import {  CarProvider } from './context/CarContext.jsx'






export default function App() {
  return (
    <CarProvider>
      <MainRouter/>
    </CarProvider>


    
  )
}
