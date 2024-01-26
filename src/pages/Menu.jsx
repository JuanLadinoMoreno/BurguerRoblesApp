
import React, { useEffect, useState } from 'react'
import ItemListContainer from '../components/Pages/Menu/ItemListContainer'
import { useGetProducts } from '../Hooks/useProducts';


export default function Menu() {

     const { productsData } = useGetProducts()


    return (
        <>
            <header className="headerPagM">
                <div className="header-content">
                    <h1>Menu</h1>
                </div>
            </header>

            <ItemListContainer productsData = {productsData}/>
        </>
    )
}
