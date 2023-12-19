import { Link } from "react-router-dom"


export default function ItemListContainer({ productsData }) {

    // const { aderesos } = productsData;
    // aderesos.map((ade, index) => console.log(ade.nombre))


    // const cargaAderesos = (producto) => {
    //     const { aderesos } = producto;
    //     if (!aderesos) {
    //         return "";
    //     }
    //     let adeArre = Object.values(aderesos);
    //     let HTMLresul = "";
    //     for (let i = 0; i < adeArre.length; i++) {
    //         HTMLresul = <li> {adeArre[i]} </li>;
    //         console.log(HTMLresul);

    //     }
    //     return HTMLresul;
    // }

    // const cargaAde = (producto) => {
    //     const { aderesos } = producto;
    //     if (!aderesos) {
    //         return "";
    //     }
    //     let adeArre = Object.values(aderesos);
    //     let HTMLresul = "";
    //     adeArre.map(ade => {
    //         HTMLresul = <li> {adeArre[i]} </li>;
    //         console.log(HTMLresul);
    //     })
    //     return HTMLresul;
    // }

    // const cargaAderes = (producto) => {
    //     producto.aderesos.map((item, index) =>{
    //         return(
    //             <div key={index}>

    //                 {Object.keys(item).map((key) => {
    //                     return(
    //                         <li key={index}>
    //                             {item[key]}
    //                         </li>
    //                     )
    //                 })}
    //             </div>
    //         )
    //     }

    //     )
    // }



    return (
        <>
            <section className="contMen">
                <div className="dvMenProductos">
                    <ul className="ulMenu">
                        {/* <!-- se agrega btnMenu en la pagina de pedido --> */}
                        <li><button id="todosP" className="btn-prin btnMenu btnMenuProducto active">Todos los productos</button></li>
                        <li><button id="burguerP" className="btn-prin btnMenu btnMenuProducto">Hamburguesas</button></li>
                        <li><button id="hotdogP" className="btn-prin btnMenu btnMenuProducto">Hot dos</button></li>
                        <li><button id="bagP" className="btn-prin btnMenu btnMenuProducto">Baguettes</button></li>
                        <li><button id="sandP" className="btn-prin btnMenu btnMenuProducto">Sandwiches</button></li>
                        <li><button id="burrP" className="btn-prin btnMenu btnMenuProducto">Burritos</button></li>
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
                            console.log(products.tipo.nombre);
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
                            <img className="" src="../assets/img/menu/bgTripl.png" alt="" />
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