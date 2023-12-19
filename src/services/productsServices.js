import axios from "axios";

export async function getProducts(){
    // return await axios.get('https://run.mocky.io/v3/407c83b9-74d8-4d7a-a2d5-9383309833fc');
    // return await axios.get('https://apimocha.com/burguerrobles/products');
    return await axios.get('https://run.mocky.io/v3/d4883467-9de7-4fb4-97d6-9c985bcbaa5e');
    
    
}

export async function getProductById(id){
    return await axios.get(`https://apimocha.com/burgrob/products/${id}`);
}

