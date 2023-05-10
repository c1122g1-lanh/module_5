import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/facilitys")
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const save = async (facility) => {
    try {
        const result = await axios.post("http://localhost:8080/facilitys",{...facility})
        return  result.data
    }catch (e) {
        console.log(e)
    }
}

export const remove = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/facilitys/${id}`)
    }catch (error){
        console.log(error)
    }
}
export const edit = async (facility) => {
    try {
        await axios.put('http://localhost:8080/facilitys/' + facility.id,{...facility})
    }catch (error){
        console.log(error)
    }
}
// Lấy dữ liệu của 1 phần tử trong list theo id
export const getFacility = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/facilitys/" + id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}