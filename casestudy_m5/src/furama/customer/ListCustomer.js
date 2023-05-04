import React, {Component} from "react";
import {customer, customerType, gender} from "./customer";

export function ListCustomer() {
    return (
        <>
            <div className="container1">
                <img
                    src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
                    alt=""
                    height={300}
                    width="100%"
                />
            </div>
            <div className="container">
                <h3 style={{textAlign: "center"}}>Danh sách khách hàng</h3>
                <a href="">Tạo mới</a>
                <table className="table table-striped ">
                    <thead>
                    <tr className="table-dark">
                        <th>Stt</th>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Số CMND</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Loại khách</th>
                        <th>Địa chỉ</th>
                        <th colSpan={3}>Chức năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customer.map((value,index) => (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.dayOfBirth}</td>
                                <td>
                                    {
                                        gender.find(gender => value.gender === gender.id)?.name
                                    }</td>
                                <td>{value.numberCard}</td>
                                <td>{value.numberPhone}</td>
                                <td>{value.email}</td>
                                <td>{customerType.find(customerType => value.customerType=== customerType.id)?.name}</td>
                                <td>{value.address}</td>
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
    )

}
