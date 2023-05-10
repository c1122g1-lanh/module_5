import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as contactService from "../../service/contactService";

export function ListContacts() {
    const [contacts,setContacts] = useState([])
    useEffect(() => {
        const contact = async () => {
            const result = await contactService.findAll()
            setContacts(result)
        }
        contact()
    })
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
                                <td><button className="btn btn-danger">Delete</button></td>
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
        </>

    );
}
