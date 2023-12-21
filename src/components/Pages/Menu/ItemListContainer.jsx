import { Link } from "react-router-dom"
import { useGetCategories } from "../../../Hooks/useProducts";


export default function ItemListContainer({ productsData }) {

    const {categories} = useGetCategories();

    return (
        <>
            <section className="contMen">
                <div className="dvMenProductos">
                    <ul className="ulMenu">
                        
                        {
                            categories.map((cate, index) => {
                                return (
                                <Link key={index} to={`/menu/category/${cate.id}`} >
                                    <li className="btn-prin btnMenu btnMenuProducto">
                                         {cate.nombre}
                                    </li>
                                </Link>
                                )
                            })
                        }
                    </ul>
                    <a className="btn-transparent " href="../pages/shop.html">
                        <i className="bi bi-cart-fill"></i>
                        En carrito
                        <span id="cantidadProductos" className="prodCant disabled"> 0</span>
                    </a>
                </div>

                <div id="dvProductos" className="dvProductos">

                    {
                        productsData.map(products => {
                            return (

                                <div className="dvProducto" key={products.id}>
                                    <Link to={`/menu/item/${products.id}`}>
                                        <img className="imgProducto" src={products.urlImg} alt="" />
                                    </Link>
                                    <div className="datProd">
                                        <h3>{products.nombre}</h3>
                                        <ul className="ulIngre">
                                            <li >{products.ingrePrep}</li>
                                            <li >{products.pan}</li>

                                            {
                                                products.aderesos ? products.aderesos.map((adereso) => (<li key={products.nombre + adereso.id}> {adereso.nombre} </li>)) : null
                                            }


                                            {
                                                products.vegetales ? products.vegetales.map((adereso) => (<li key={products.nombre + adereso.id}>{adereso.nombre}</li>)) : null
                                            }

                                        </ul>
                                        <button className="btnAnadirP"><i className="bi bi-cart-plus-fill"></i>Ordenar</button>
                                    </div>
                                </div>


                            )

                        })

                    }



                </div>

                <section className="sectProdBig overflow-x-hidden">

                    <div className="row">

                        <div className="sectProdBig__contDat p-5 col-lg-5  col-md-6 col-sm-12">
                            <img className="" src="../assets/img/icons/real.svg" alt="" />
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
                            <img className="" src="../../public/img/bgTripl.png" style={{maxWidth:"70%"}} alt="" />
                        </div>


                    </div>


                </section>
            </section>
        </>
    )
}


// profe tengo una duda si al cargar los detalles del producto, dentro del objeto tenemos otro objeto y esos datos los queremos mostrar
// {
//     "aderesos": {
//         "catsup": "Catsup",
//         "mayonesa": "Mayonesa",
//         "mostaza": "Mostaza"
//     },
//     "id": "1",
//     "nombre": "Hamburguesa Tradicional",
// },