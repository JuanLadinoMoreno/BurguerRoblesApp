import { Link, useLoaderData } from "react-router-dom"
import MenuProducts from "./MenuProducts"
import ProdBig from "../../ProdBig"
import { useGetProducts } from "../../../Hooks/useProducts"




// import { useGetCategories } from "../../../Hooks/useProducts";


export default function ItemListContainer({ productsData }) {

    // const {categories} = useGetCategories();

    // const [isLoading, setMenuState] = useState(true);
    const { isLoading, setIsLoading } = useGetProducts('products')

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
                        >
                        </l-dot-spinner> :

                         

<div className="dvProductos">

{
    productsData.map(products => {
        return (

            <div className="dvProducto" key={products.id}>


                <h3>{products.nombre}</h3>


                <div className="datProd">

                    <Link to={`/menu/item/${products.id}`}>
                        <img className="imgProducto" src={products.urlImg} alt="" />
                    </Link>

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
                </div>
                    <Link to={`/menu/item/${products.id}`} className="btnAnadirP" ><i className="bi bi-cart-plus-fill"></i>Ordenar</Link>
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
