import React, {Component, useState} from "react";
import {facility} from "./facility";

export function ListService() {
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
                <h2 style={{textAlign:"center"}}>Danh sách dịch vụ</h2>
                {
                    facility.map((value, index)=>(
                        <div key={index} className="card col-3" style={{width: "25%"}}>
                            <img
                                src={value.image}

                                style= {{width:"100%",height:"80%"}}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{value.name}</h5>
                                <p className="card-text"> {value.area}</p>
                                <a href="#" className="btn btn-primary" style={{marginRight:"3px"}}>
                                    Sửa
                                </a>
                                <a href="#" className="btn btn-danger">
                                    Xóa
                                </a>
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
        </>
    )
}
