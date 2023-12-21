
import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts, getProductById, getCategories, getProductByCategory } from '../services';



export const useGetProducts = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect( () => {
        getProducts().then(response => {
            setProductsData(response.data);
            // console.log(productsData);
        }).catch(error => {console.log(error);})
    }, []);

    return{ productsData }
}


export const useGetProductsById = (id) => {
    const [productData, setProductData] = useState([]);

    useEffect( () => {
        getProductById(id).then(response => {
            setProductData(response.data);
        }).catch(error => {console.log(error);})
    }, []);

    return{ productData }
}

export const useGetCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        getCategories().then(response => {
            setCategories(response.data);
        }).catch(error => {console.log(error);})
    }, []);

    return{ categories }
}





export const useGetProductsByCategory = (id) => {
    const [productsData, setProductsData] = useState([]);

    useEffect( () => {
        getProductByCategory(id).then(response => {
            setProductsData(response.data);
        }).catch(error => {console.log(error);})
    }, [id]);

    return{ productsData }
}