import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import *as Yup from "yup"
import * as productService from "../service/productService";
import {useNavigate, useParams} from "react-router";

export function Edit() {
    const [product, setProduct] = useState()
    const [productList, setProductList] = useState([])
    const [typeList, setTypeList] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const fiecthApi = async () => {
            const productList = await productService.findAll()
            const typeList = await productService.findAllType()
            setProductList(productList)
            setTypeList(typeList)
        }
        fiecthApi()
    }, [])

    useEffect(() => {
        const getData = async () => {
            const product = await productService.findById(id)
            setProduct(product)
        }
        getData()
    }, [])

    return (
        <>
            <Formik
                initialValues={{
                    ten: product?.ten,
                    ngayNhap: product?.ngayNhap,
                    soLuong: product?.soLuong,
                    loaiSanPham: product?.loaiSanPham

                }}

                validationSchema={Yup.object({
                    ten: Yup.string().max(100).required('không được bỏ trống'),
                    ngayNhap: Yup.string().required('Không được bỏ trống'),
                    soLuong: Yup.number().integer().min(1).required('không được bỏ trống')
                })}


                onSubmit={(product) => {
                    const edit = async () => {
                        await productService.edit(product)
                    }
                    edit()
                    navigate('/')

                }}
            >
                <div className='container'>
                    <h3>Edit</h3>
                    <Form>
                        <label>Tên</label><br/>
                        <Field name={'ten'}/>

                        <br/>
                        <ErrorMessage name={'ten'} component={'span'}/><br/>
                        <label>Ngày nhập</label><br/>
                        <Field type={'text'} name={'ngayNhap'}/>

                        <br/>
                        <ErrorMessage name={'ten'} component={'span'}/><br/>
                        <label>Số lượng</label><br/>
                        <Field type={'text'} name={'soLuong'}/>
                        <br/>
                        <ErrorMessage name={'ten'} component={'span'}/><br/>
                        <label>Loại sản phẩm</label><br/>
                        <Field type={'text'} name={'loaiSanPham'}
                               as={'select'}>
                            {
                                typeList.map((type, index) => (
                                    <option value={type.maSo} key={index}>
                                        {type.tenSP}
                                    </option>
                                ))
                            })
                            }
                        </Field><br/>
                        <ErrorMessage name={'ten'} component={'span'}/><br/>
                        <button type='submit'>Sửa</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}