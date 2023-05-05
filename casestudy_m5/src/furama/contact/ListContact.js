import React, {Component} from "react";
import {contacts} from "./contacts";

export function ListContacts() {

    return (
        <>
            <div className="container">
                <h3 style={{textAlign: "center"}}>Danh sách khách hàng</h3>
                <a href="">Tạo mới</a>
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
                        contacts.map((value, index) => (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.dayOfBegin}</td>
                                <td>{value.dayOfEnd}</td>
                                <td>{value.deposit}</td>
                                <td>{value.total}</td>
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
