import { useContext, useState } from 'react'
import { useGetProductsById } from '../../../Hooks/useProducts'
import { Link, useParams } from 'react-router-dom'
import MenuProducts from './MenuProducts'
import { CarContext } from '../../../context/CarContext'
import ProdBig from '../../ProdBig'
import { ItemCount } from '../../ItemCount'



export default function ItemDetailContainer() {

    const { id } = useParams() //Obtiene id de la ruta para mostrar el producto
    const { productData, isLoading } = useGetProductsById(id, 'products')
    // const {handleAdd, handleRemove} = useContext(CarContext)

    return (

        <>
        {/* {
            console.log(productData.tipo)
        } */}

            {
                isLoading ?
                    <l-dot-spinner
                        size="80"
                        speed="1.1"
                        color="#0F1854"
                    ></l-dot-spinner> :

                    <section className="contMen">

                        <MenuProducts />

                        <div className="dvProductos">

                            <div className="dvProducto" key={productData.id}>

                                <img className="imgProducto" src={productData.urlImg} alt="" width='350px' />

                                <div className="datProd">
                                    <h3>{productData.nombre}</h3>
                                    <ul className="ulIngre">
                                        <li >{productData.ingrePrep}</li>
                                        <li >{productData.pan}</li>
                                        {
                                            productData.aderesos ? productData.aderesos.map((adereso) => (<li key={adereso.id}> {adereso.nombre} </li>)) : null
                                        }
                                        {
                                            productData.vegetales ? productData.vegetales.map((adereso) => (<li key={adereso.id}>{adereso.nombre}</li>)) : null
                                        }
                                    </ul>
                                </div>
                                {/* <button className="btnAnadirP" onClick={handleRemove}><i className="bi bi-cart-plus-fill"></i> ➖ </button>
                                <button className="btnAnadirP" onClick={handleAdd}><i className="bi bi-cart-plus-fill"></i> ➕ </button> */}
                                <ItemCount productId={productData.id} />
                            </div>
                        </div>

                    </section>
            }




            <ProdBig />

        </>
    )
}
