import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import * as bookService from "../../services/bookService";
import {Link} from "react-router-dom";
import {findAll, remove} from "../../services/bookService";

export function BookManagement() {
    const [bookList, setBookList] = useState([])
    const [bookDetail, setBookDetail] = useState()
    useEffect(
        () => {
            const fetchApi = async () => {
                const result = await bookService.findAll()
                setBookList(result)
            }
            fetchApi()
        },[])
    const handleDelete = async () => {
        await bookService.remove(bookDetail.id);
        let result = await bookService.findAll();
        setBookList(result);
    };
    const getData = async (id) => {
        const data = await bookService.getBook(id);
        setBookDetail(data);
    };
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
                                            <Link to={`/edit-book/${book.id}`} className='btn btn-success'>Edit</Link>
                                        </td>
                                        <td>
                                            {/*<button type='button' onClick={()=> handleDelete(book.id)} className='btn btn-danger'>Delete</button>*/}
                                            <button onClick={()=>getData(book.id)} type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>

                    </Formik>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                        </div>
                        <div className="modal-body">
                            <span>Bạn có muốn xóa</span> <span>{bookDetail?.title}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Cancel
                            </button>
                            <button  onClick={()=>handleDelete()} type="button" className="btn btn-primary"  data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}