import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as contactService from "../../service/contactService";

export function ListContacts() {
    const [contacts,setContacts] = useState([])
    const [contact,setContact] = useState()
    useEffect(() => {
        const contact = async () => {
            const result = await contactService.findAll()
            setContacts(result)
        }
        contact()
    },[])
    const handleDelete = async () => {
        await contactService.remove(contact.id);
        let result = await contactService.findAll();
        setContacts(result);
    };
    const getData = async (id) => {
        const data = await contactService.getContact(id);
        setContact(data);
    };
    return (
        <>
            <div className="container">
                <h3 style={{textAlign: "center"}}>Danh sách hợp đồng</h3>
                <Link to="/contact-create">Tạo mới</Link>
                <table className="table table-striped ">
                    <thead>
                    <tr className="table-dark">
                        <th>Stt</th>
                        <th>Số hợp đồng</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Số tiền cọc trước</th>
                        <th>Tổng số tiền thanh toán</th>
                        <th colSpan='3'>Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.dayOfBegin}</td>
                                <td>{contact.dayOfEnd}</td>
                                <td>{contact.deposit}</td>
                                <td>{contact.total}</td>
                                <td><button className="btn btn-primary">Detail</button></td>
                                <td><button className="btn btn-warning">Edit</button></td>
                                <td><button onClick={()=>getData(contact.id)} type="button" className="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" >
                                    Delete
                                </button></td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
            <div className="container d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Previous
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                        </div>
                        <div className="modal-body">
                            <span>Bạn có muốn xóa</span> <span style={{color:'red'}}>{contact?.name}</span>
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

    );
}
