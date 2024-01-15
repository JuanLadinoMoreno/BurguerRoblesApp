import { Link, useLoaderData } from "react-router-dom"
import MenuProducts from "./MenuProducts"
import ProdBig from "../../ProdBig"
import { useGetProducts } from "../../../Hooks/useProducts"




// import { useGetCategories } from "../../../Hooks/useProducts";


export default function ItemListContainer({ productsData }) {

    // const {categories} = useGetCategories();

    // const [isLoading, setMenuState] = useState(true);
    const { isLoading } = useGetProducts('products')

    return (
        <>


            <section className="contMen">
                <MenuProducts />
                {

                    isLoading ?
                        // Default values shown
                        <l-dot-spinner
                        size="80"
                        speed="1.1"
                        color="#0F1854" 
                        ></l-dot-spinner> :
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
                }




                <ProdBig />

            </section>
        </>
    )
}
