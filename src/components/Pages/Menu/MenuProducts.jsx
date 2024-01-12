
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useGetCategories } from '../../../Hooks/useProducts';
import { CarContext } from '../../../context/CarContext';



export default function MenuProducts() {

    const { categories } = useGetCategories();
    const { count } = useContext(CarContext);
    console.log(count);

    // const [menuState, setMenuState] = useState(true);

    return (
        <div className="dvMenProductos">
            <ul className="ulMenu">

                <Link to='/menu' >
                    <li className="btn-prin btnMenu btnMenuProducto">
                        Todos los productos
                    </li>
                </Link>

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

                <span id="cantidadProductos" className="prodCant "> {count.reduce( (acc, prod) => acc + prod.quantity, 0)} </span>
            </a>
        </div>
    )
}


