import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/customers")
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const save = async (customer) => {
    try {
        const result = await axios.post("http://localhost:8080/customers",{...customer})
        return  result.data
    }catch (e) {
        console.log(e)
    }
}

export const remove = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/customers/${id}`)
    }catch (error){
        console.log(error)
    }
}
export const edit = async (customer) => {
    try {
        await axios.put('http://localhost:8080/customers/' + customer.id,{...customer})
    }catch (error){
        console.log(error)
    }
}
// Lấy dữ liệu của 1 phần tử trong list theo id
export const getCustomer = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/customers/" + id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}