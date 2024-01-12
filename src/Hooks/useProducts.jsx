
import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts, getProductById, getCategories, getProductByCategory } from '../services';



export const useGetProducts = () => {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            getProducts().then(response => {
                setProductsData(response.data);
                setIsLoading(false)
                // console.log(productsData);
            }).catch(error => { console.log(error); })
        }, 3200);
    }, []);

    return { productsData, isLoading }
}


export const useGetProductsById = (id) => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getProductById(id).then(response => {
                setProductData(response.data);
            }).catch(error => { console.log(error); })
        }, .2700);

    }, []);

    return { productData }
}

export const useGetCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getCategories().then(response => {
                setCategories(response.data);
            }).catch(error => { console.log(error); })
        }, 3200);
    }, []);

    return { categories }
}





export const useGetProductsByCategory = (id) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getProductByCategory(id).then(response => {
                setProductsData(response.data);
            }).catch(error => { console.log(error); })
        }, 3200);

    }, [id]);

    return { productsData }
}