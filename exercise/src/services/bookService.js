import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/books")
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const save = async (book) => {
    try {
        const result = await axios.post("http://localhost:8080/books",{...book})
        return  result.data
    }catch (e) {
        console.log(e)
    }
}

export const remove = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/books/${id}`)
    }catch (error){
        console.log(error)
    }
}
export const edit = async (book) => {
    try {
        await axios.put('http://localhost:8080/books/' + book.id,{...book})
    }catch (error){
        console.log(error)
    }
}
// Lấy dữ liệu của 1 phần tử trong list theo id
export const getBook = async (id) => {
    try {
        const result = await axios.get("http://localhost:8080/books/" + id)
        return result.data
    }catch (e) {
        console.log(e)
    }
}