import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/contacts")
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const save = async (contact) => {
    try {
        const result = await axios.post("http://localhost:8080/contacts",{...contact})
        return  result.data
    }catch (e) {
        console.log(e)
    }
}

export const remove = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/contacts/${id}`)
    }catch (error){
        console.log(error)
    }
}
export const edit = async (contact) => {
    try {
        await axios.put('http://localhost:8080/contacts/' + contact.id,{...contact})
    }catch (error){
        console.log(error)
    }
}
// Lấy dữ liệu của 1 phần tử trong list theo id
export const getContact = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/contacts/" + id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}