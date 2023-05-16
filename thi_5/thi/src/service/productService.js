import axios from "axios";

export const findAll = async () => {
    try{
        const result = await axios.get(`http://localhost:8080/product`)
        return result.data
    }catch (e) {
        console.log(e)
    }

}

export const findAllType = async () => {
    try{
        const result = await axios.get(`http://localhost:8080/types`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/product/" + id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const edit = async (product) => {
    try {
         await axios.put(`http://localhost:8080/${product.maSo}` , product)

    }catch (e) {
        console.log(e)
    }
}

export const findByName = async (name) =>{
    try {
        const result = await axios.get(`http://localhost:8080/product?name_like=${name}`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/product/${id}`)
    } catch (error) {
        console.log(error)
    }
}

export const save = async (product) => {
    try {
        const result = await axios.post("http://localhost:8080/product", {...product})
        return result.data
    } catch (e) {
        console.log(e)
    }
}
