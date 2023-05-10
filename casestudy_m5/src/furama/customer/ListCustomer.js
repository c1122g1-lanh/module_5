import React, {useEffect, useState} from "react";
import {customerType, gender} from "./customer";
import {useNavigate} from "react-router";
import * as customerService from "../../service/customerService";

export function ListCustomer() {
    const [customerList, setCustomerList] = useState([])
    const [customer, setCustomer] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchApi = async () => {
            const customer = await customerService.findAll()
            setCustomerList(customer)
        }
        fetchApi()

    }, [])

    const handleDelete = async () => {
        await customerService.remove(customer.id);
        let result = await customerService.findAll();
        setCustomer(result);
    };

    const getData = async (id) => {
        const data = await customerService.getCustomer(id);
        setCustomer(data);
    };
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
                        customerList.map((value,index) => (
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
                                <td>{
                                    customerType.find(customerType => value.customerType=== customerType.id)?.name}
                                </td>
                                <td>{value.address}</td>
                                <td><button className="btn btn-primary">Detail</button></td>
                                <td><button className="btn btn-warning">Edit</button></td>
                                <td><button onClick={()=>getData(value.id)} type="button" className="btn btn-danger" data-bs-toggle="modal"
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
                            <span>Bạn có muốn xóa</span> <span style={{color:'red'}}>{customer?.name}</span>
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
