



export default function ItemListContainer({ productsData }) {


    // const { aderesos } = productsData;
    // aderesos.map((ade, index) => console.log(ade.nombre))


    const cargaAderesos = (producto) => {
        const { aderesos } = producto;
        if (!aderesos) {
            return "";
        }
        let adeArre = Object.values(aderesos);
        let HTMLresul = "";
        for (let i = 0; i < adeArre.length; i++) {
            HTMLresul = <li> {adeArre[i]} </li>;
            console.log(HTMLresul);
    
        }
        return HTMLresul;
    }

    const cargaAde = (producto) => {
        const { aderesos } = producto;
        if (!aderesos) {
            return "";
        }
        let adeArre = Object.values(aderesos);
        let HTMLresul = "";
        adeArre.map(ade => {
            HTMLresul = <li> {adeArre[i]} </li>;
            console.log(HTMLresul);
        })
        return HTMLresul;
    }

    const cargaAderes = (producto) => {
        producto.aderesos.map((item, index) =>{
            return(
                <div key={index}>
                    
                    {Object.keys(item).map((key) => {
                        return(
                            <li key={index}>
                                {item[key]}
                            </li>
                        )
                    })}
                </div>
            )
        }

        )
    }

    

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
                            const { aderesos } = products;
                            return (

                                <div className="dvProducto" key={products.id}>
                                    <img className="imgProducto" src={products.urlImg} alt="" />
                                    <div className="datProd">
                                        <h3>{products.nombre}</h3>
                                        <ul className="ulIngre">
                                            <li >{products.ingrePrep}</li>
                                            <li >{products.pan}</li>
                                            <li > catsup </li><li> Mayonesa </li><li> Mostaza </li>
                                            <li > jitomate </li><li> cebolla </li><li> rajas </li>
                                            
                                            {/* {cargaAderes(products)} */}



                                        </ul>
                                        <button className="btnAnadirP"><i className="bi bi-cart-plus-fill"></i>Ordenar</button>
                                    </div>
                                </div>
                                

                            )
                            
                        })
                        
                    }



                </div>
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