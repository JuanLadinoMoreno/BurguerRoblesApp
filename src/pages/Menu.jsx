
import React, { useEffect, useState } from 'react'
import ItemListContainer from '../components/Pages/Menu/ItemListContainer'
import { getProducts } from '../services';

export default function Menu() {

    const [productsData, setProductsData] = useState([]);

    useEffect( () => {
        getProducts().then(response => {
            setProductsData(response.data);
        }).catch(error => {console.log(error);})
    }, []);

    // console.log(productsData);

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
