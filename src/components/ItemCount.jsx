import React, { useContext, useState } from 'react'
import { CarContext } from '../context/CarContext'


export const ItemCount = ({ productId }) => {

    const { count, setCount } = useContext(CarContext);
    const [countItem, setCountItem] = useState(1);


    const handleAddItem = () => {
        setCountItem(countItem + 1);
    }

    const handleRemoveItem = () => {
        if (countItem === 1) return;

        setCountItem(countItem - 1);
    }

    const addCart = () => {
        // setCount(count + countItem);

        const newProduct =
        {
            id: productId,
            quantity: countItem
        }

        const IndexFind = count.findIndex(item => item.id === productId)
        if (IndexFind >= 0) {
            const newCart = structuredClone(count);
            newCart[IndexFind].quantity += countItem
            setCountItem(1);
            return setCount(newCart);
            
        }else{
            setCount(prevState => ([
                ...prevState,
                {
                    id: productId,
                    quantity: countItem
                }
            ]))
            console.log('else' + count.findIndex(item => item.id === productId));
        }

        // const prodFind = count.find(item => item.id === productId);
        // if (prodFind) {
        //     const newCount = count.map(item => {
        //         if (item.id === productId) {
        //             return{
        //                 ...item,
        //                 quantity: item.quantity + countItem
        //             }
        //         }else{
        //             return item
        //         }
        //     })
        //     setCount([newCount])
        // }else{
        //     setCount([newProduct])
        // }

        setCountItem(1);
    }

    return (
        <div>
            <button className="btnAnadirP" onClick={handleRemoveItem}><i className="bi bi-cart-plus-fill"></i> ➖ </button>
            <span> {countItem} </span>
            <button className="btnAnadirP" onClick={handleAddItem}><i className="bi bi-cart-plus-fill"></i> ➕ </button>
            <button className="btnAnadirP" onClick={addCart}><i className="bi bi-cart-plus-fill"></i>Ordenar</button>
        </div>
    )
}
