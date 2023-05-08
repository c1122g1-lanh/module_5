import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import * as bookService from "../../services/bookService";
import {Link} from "react-router-dom";

export function BookManagement() {
    const [bookList, setBookList] = useState([])
    useEffect(
        () => {
            const fetchApi = async () => {
                const result = await bookService.findAll()
                setBookList(result)
            }
            fetchApi()
        })
    return (
        <>
            <div className='row'>
                <h2>Library</h2>
                <Link to="/add-book" className='btn btn-primary' style={{width: 25 + '%', fontSize: 10}}>Add a new book</Link>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <Formik initialValues={{
                        id: '',
                        title: '',
                        quantity: ''
                    }}>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Quantity</th>
                                <th scope="col" colSpan='2'>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                bookList.map((book, index) => (
                                    <tr key={index}>
                                        <td>{book.title}</td>
                                        <td>{book.quantity}</td>
                                        <td>
                                            <Link to='/' className='btn btn-success'>Edit</Link>
                                        </td>
                                        <td>
                                            <Link to='/' className='btn btn-danger'>Delete</Link>
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>

                    </Formik>
                </div>
            </div>
        </>
    )

}