import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import * as productService from "../service/productService";
import {differenceInBusinessDays} from "date-fns"

export function CreateProduct() {
    const navigate = useNavigate();
    const [typeProduct, setTypeProduct] = useState([]);
    useEffect(() => {
            const list = async () => {
                const res = await productService.findAllType()
                setTypeProduct(res);
            };
            list();
        }, []
    )
    // Parse dd/MM/yyyy
    const parseDate = (value) => {
        return new Date(value).toLocaleDateString("VN", {});
    };
    return (
        <>

            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    publicDay: '',
                    quantity: '',
                    productType: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Nhập tên khách hàng....'),
                        publicDay: Yup.date()
                            .required("Ngày thêm bắt buộc nhập")
                            .test(
                                "Ngày thêm phải bé hơn hoặc bằng ngày hiện tại.",
                                "Ngày thêm phải bé hơn hoặc bằng ngày hiện tại.",
                                function (value) {
                                    return (
                                        differenceInBusinessDays(new Date(value), new Date()) <= 0
                                    );
                                }
                            ),
                    quantity: Yup.number().integer().required('Nhập số lượng...'),

                })}
                onSubmit={(product) => {
                    console.log(product)

                    const create = async () => {
                        await productService.save(product)
                    }
                    create()
                    alert("Tạo mới thành công !")
                    navigate("/product")
                }}>
                <div className="container">
                    <div className='row'>
                        <h3>Tạo mới</h3>
                        <Link to={"/product"}>Quay về danh sách khách hàng</Link>
                    </div>
                    <div className='row'>
                        <Form>
                            <div className='mb-3'>
                                <label className='form-label'>Tên khách hàng</label><br/>
                                <Field type='text' name='name'/><br/>
                                <ErrorMessage name='name' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Ngày sinh</label><br/>
                                <Field type='text' name='publicDay'/><br/>
                                <ErrorMessage name='publicDay' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Giới tính</label><br/>
                                <Field
                                    as={"select"}
                                    name={"productType"}
                                >
                                    {
                                        typeProduct.map((type, index) => (
                                            <option key={index} value={type.id}>
                                                {type.name}
                                            </option>
                                        ))
                                    }
                                </Field><br/>
                                <ErrorMessage name='area' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <button type='submit' className='btn btn-primary'>Lụm</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Formik>
        </>
    )
}
