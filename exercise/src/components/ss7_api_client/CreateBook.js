import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as bookService from "../../services/bookService";
import {Link, useNavigate} from "react-router-dom";

export function CreateBook() {
    const [bookList, setBookList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findAll()
            setBookList(result)
        }
        fetchApi()

    }, [])

    return (
        <>
            <Formik initialValues={{
                id: '',
                title: '',
                quantity: ''
            }}
                    onSubmit={(book) => {
                        const create = async () => {
                            await bookService.save(book)
                        }
                        create()
                        alert(" Thành công")
                        navigate('/')

                    }}>
                <Form>
                    <div className='container-fluid '>
                        <h2>Create Book</h2>
                        <Link to='/'>List</Link>
                        <div className='row-cols-6'>
                            <label>Title</label><br/>
                            <Field type='text' name='title'/>
                        </div><br/>
                        <div className='row-cols-6'>
                            <label>Quantity</label><br/>
                            <Field type='number' name='quantity'/>
                        </div><br/>
                        <button className='btn btn-primary' type='submit'>Lụm</button>
                    </div>
                </Form>
            </Formik>

        </>
    )

}