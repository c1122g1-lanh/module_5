import React, {useEffect, useState} from "react";
import * as facilityService from "../../service/facilityService";
import {Link} from "react-router-dom";

export function ListService() {
    const [facilitys, setFacilitys] = useState([])
    const [facility, setFacility] = useState()
    const [listName, setListName] = useState([])
    useEffect(() => {
        const res = async () => {
            const result = await facilityService.findAll()
            setFacilitys(result)
        }
        res()
    }, [])
    const handleDelete = async () => {
        await facilityService.remove(facility.id);
        let result = await facilityService.findAll();
        setFacilitys(result);
    };

    const getData = async (id) => {
        const data = await facilityService.getFacility(id);
        setFacility(data);
    };

    const handleSearch = async () => {
        let name = document.getElementById('nameStudent').value
        const result = await facilityService.findByName(name)
        if (result.length != 0) {
            setFacilitys(result)
        } else {
            alert('không tìm thấy')
        }

    }

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
            <div className="row">
                <h2 style={{textAlign: "center"}}>Danh sách dịch vụ</h2>
                <Link to='/service-create'>Tạo mới dịch vụ</Link>
                <div className='d-flex'>
                    <input id='nameStudent' className="row-cols-3" type="search" placeholder="Search by name..."
                           aria-label="Search"/>
                    <button className="btn btn-outline-success" onClick={() => handleSearch()} type="button">Search
                    </button>
                </div>
                {
                    facilitys.map((value) => (
                        <div key={value.id} className="card col-3">
                            <img
                                src={value.image}
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{value.name}</h5>
                                <p className="card-text"> {value.area}</p>
                                <a href="#" className="btn btn-primary" style={{marginRight: "3px"}}>
                                    Sửa
                                </a>
                                <button onClick={() => getData(value.id)} type="button" className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))
                }
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
                            <span>Bạn có muốn xóa</span> <span style={{color: 'red'}}>{facility?.name}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Cancel
                            </button>
                            <button onClick={() => handleDelete()} type="button" className="btn btn-primary"
                                    data-bs-dismiss="modal">OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
