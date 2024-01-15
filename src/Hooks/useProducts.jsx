
import { useState, useEffect } from 'react';
import { getProducts, getProductById, getCategories, getProductByCategory } from '../services';
import {collection, getDocs, doc, getDoc, getFirestore, query, where} from 'firebase/firestore';


// export const useGetProducts = () => {
//     const [productsData, setProductsData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         setTimeout(() => {
//             getProducts().then(response => {
//                 setProductsData(response.data);
//                 setIsLoading(false)
//                 // console.log(productsData);
//             }).catch(error => { console.log(error); })
//         }, 3200);
//     }, []);

//     return { productsData, isLoading }
// }

export const useGetProducts = (collectionName = 'products', id) => {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

            const db = getFirestore();

            const productsCollection = collection(db, collectionName);

            // const quer = id ? query(productsCollection, where("category", "==", 'burguerP')) : productsCollection;
            
            getDocs(productsCollection).then((snapshot) => {
                setProductsData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            setIsLoading(false);
            
        }, 3200);
    }, []);

    return { productsData, isLoading }
}

export const useGetProductsCat = (id) => {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

            const db = getFirestore();

            const productsCollection = collection(db, 'products');

            const quer = query(productsCollection, where("category", "==", id)) ;
            
            getDocs(quer).then((snapshot) => {
                setProductsData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })
            setIsLoading(false);
            
        }, 3200);
    }, [id]);

    return { productsData, isLoading }
}


export const useGetProductsById = (id, collectionName = "products") => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

            const db = getFirestore();
            const docRef = doc(db, collectionName, id)
            getDoc(docRef).then((doc) => {
                setProductData({ id: doc.id, ...doc.data() });
            })

            setIsLoading(false);
        }, .2700);

    }, []);

    return { productData, isLoading }
}


//LLENA EL MENU DE CATEGORIAS
export const useGetCategories = (collectionName = "categories") => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // setTimeout(() => {}, 3200);

            const db = getFirestore();
            const productsCollection = collection(db, collectionName);
            getDocs(productsCollection).then((snapshot) => {
                setCategories(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            })

            setIsLoading(false);
        
    }, []);

    return { categories, isLoading }
}





export const useGetProductsByCategorys = (id) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // ----API----
            // getProductByCategory(id).then(response => {
            //     setProductsData(response.data);
            // }).catch(error => { console.log(error); })


            //FIRESTORE SIN ID
            // const db = getFirestore();
            // const productsCollection = collection(db, 'products');
            // getDocs(productsCollection).then((snapshot) => {
            //     setProductsData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
            // })



            //FIRESTOTE CON ID
            const db = getFirestore();
            const docRef = doc(db, 'products', id)
            getDoc(docRef).then((doc) => {
                setProductsData({ id: doc.id, ...doc.data() });
            })
        }, 3200);

    }, [id]);

    return { productsData }
}