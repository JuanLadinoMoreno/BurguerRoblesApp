import React from 'react'
import ItemListContainer from '../components/Pages/Menu/ItemListContainer'
import { useParams } from 'react-router-dom';
import { useGetProducts, useGetProductsCat } from '../Hooks/useProducts';


export const Category = () => {
  const {id} = useParams();

  const { productsData } = useGetProductsCat(id);
  
    return (
      <>
      
          <header className="headerPagM">
              <div className="header-content">
                  <h1>Menu</h1>
              </div>
          </header>

         {
          
          <ItemListContainer productsData = {productsData}/>
          
         }

          
          
          {
        
      }
      </>
  )
  
}
