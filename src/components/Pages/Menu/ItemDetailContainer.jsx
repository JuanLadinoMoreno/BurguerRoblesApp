import React from 'react'
import { useGetProductsById } from '../../../Hooks/useProducts'
import { Link, useParams } from 'react-router-dom'


export default function ItemDetailContainer() {

    const { id } = useParams() //Obtiene id de la ruta para mostrar el producto
    const { productData } = useGetProductsById(id)


    return (

        <>

            <section className="contMen">
                <div className="dvProductos">



                    <div className="dvProducto" key={productData.id}>

                        <img className="imgProducto" src={productData.urlImg} alt="" height='100px' />

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
                    </div>
                </div>

            </section>

            <section className="sectProdBig overflow-x-hidden">


<div className="row">

    <div className="sectProdBig__contDat p-5 col-lg-5  col-md-6 col-sm-12">
        <img className="" src="../assets/img/icons/real.svg" alt=""/>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Quaerat deleniti sunt autem veritatis
                vel iusto ratione mollitia </span> neque unde cupiditate!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, officia!
        </p>
    </div>

    <div
        className="sectProdBig__contImg col-lg-7 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
        <span className="spanMov"></span>
        <span className="spanMov"></span>
        <span className="spanMov"></span>
        <span className="spanMov"></span>
        <span className="spanMov"></span>
        <img className="" src="../assets/img/menu/bgTripl.png" alt=""/>
    </div>


</div>


</section>

        </>
    )
}
