import React, {useEffect, useState} from "react";
import * as productService from "../service/productService";
import {Link} from "react-router-dom";

export function List() {
    const [productList, setProductList] = useState([])
    const [product, setProduct] = useState()
    useEffect(() => {
        const fiecthApi = async () => {
            const productList = await productService.findAll()
            setProductList(productList)
        }
        fiecthApi()
    }, [])


    const handleDelete = async () => {
        await productService.remove(product.id);
        let result = await productService.findAll();
        setProductList(result);
    };

    const getData = async (id) => {
        const data = await productService.findById(id);
        setProduct(data);
    };

    const handleSearch = async () => {
        let name = document.getElementById('name').value
        const result = await productService.findByName(name)
        console.log(result)
        setProductList(result)
    }

    return (
        <>
            <div className='container'>
                <h2>Danh sách sản phẩm</h2>
                <div className='d-flex'>
                    <input id='name' className="row-cols-3" type="search" placeholder="Search by name..."
                           aria-label="Search"/>
                    <button className="btn btn-outline-success" onClick={() => handleSearch()} type="button">Search
                    </button>
                </div>
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Têm sản phẩm</th>
                        <th>Ngày nhập</th>
                        <th>SỐ lượng</th>
                        <th>Loại sản phẩm</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        productList.map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.publicDay}</td>
                                <td>{product.quantity}</td>
                                <td>{product.productType.nameType}</td>
                                <td>
                                    <button onClick={() => getData(product.id)} type="button" className="btn btn-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                        Xóa
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className='btn btn-success'>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete</h5>
                        </div>
                        <div className="modal-body">
                            <span>Bạn có muốn xóa</span> <span style={{color: 'red'}}>{product?.name}</span>
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
