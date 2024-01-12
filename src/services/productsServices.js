import axios from "axios";

export async function getProducts(){
    // return await axios.get('https://run.mocky.io/v3/407c83b9-74d8-4d7a-a2d5-9383309833fc');
    // return await axios.get('https://apimocha.com/burguerrobles/products');
    return await axios.get('https://run.mocky.io/v3/d4883467-9de7-4fb4-97d6-9c985bcbaa5e');
    
}

export async function getProductById(id){
    return await axios.get(`https://apimocha.com/burguerrobles/products/${id}`);
    // return await axios.get(`https://apimocha.com/burgrob/products/${id}`);
    
}


export async function getCategories(){
    // return await axios.get('https://run.mocky.io/v3/51e38cd8-db77-42a0-b891-f4a98e36c770');
    // return await axios.get('https://apimocha.com/burgrob/menu/categories');
    return await axios.get('https://run.mocky.io/v3/aa14650b-9ca7-4c98-871b-6933386f9de9');
    
}

export async function getProductByCategory(id){
    return await axios.get(`https://apimocha.com/burguerrobles/menu/category/${id}`);
}