import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as bookService from "../../services/bookService";
import {Link, useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {edit, getBook} from "../../services/bookService";

export function EditBook() {
    const navigate = useNavigate()
    const [book, setBook] = useState()
    const param = useParams();
    useEffect(() => {
        const data = async () => {
            setBook(await getBook(param.id))
        }
        data()
    }, [param.id])
if (!book){
    return null
}
    return (
        <>
            <Formik initialValues={{
                id: book?.id,
                title: book?.title,
                quantity: book?.quantity
            }}
                    onSubmit={(book) => {
                        const edit = async () => {
                            await bookService.edit(book)
                        }
                        edit()
                        alert("ok")
                        navigate('/')
                    }}
            >
                <Form>
                    <div className='container-fluid '>
                        <h2>Create Book</h2>
                        <Link to='/'>List</Link>
                        <div className='row-cols-6'>
                            <label htmlFor={'title'}>Title</label><br/>
                            <Field type='text' id = {"title"} name='title'/>
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