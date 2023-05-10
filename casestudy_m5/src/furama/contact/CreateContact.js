import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router";
import * as contactService from "../../service/contactService";
import {Link} from "react-router-dom";

export function CreateContact() {
    const [contactList, setContactList] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchApi = async () => {
            const result = await contactService.findAll()
            setContactList(result)
        }
        fetchApi()

    }, [])

    return (
        <>
            <Formik initialValues={{
                id: '',
                name: '',
                dayOfBegin: '',
                dayOfEnd: '',
                deposit: '',
                total: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Nhập tên...'),
                        dayOfBegin: Yup.string().required('Nhập ngày bắt đầu...'),
                        dayOfEnd: Yup.string().required('Nhập kết thúc...'),
                        deposit: Yup.string().required('Nhập số tiền đặt cọc....'),
                        total: Yup.string().required('Nhập tổng số tiền....')
                    })}
                    onSubmit={(contact) => {
                        const create = async () => {
                            await contactService.save(contact)
                        }
                        create()
                        alert("Tạo mới thành công !")
                        navigate("/contact")
                    }}>
                    <div className="container">
                        <div className='row'>
                            <h3>Tạo mới</h3>
                            <Link to={"/contact"}>Quay về danh sách</Link>
                        </div>
                        <div className='row'>
                            <Form>
                                <div className='mb-3'>
                                    <label className='form-label'>Name</label><br/>
                                    <Field type='text' name='name'/><br/>
                                    <ErrorMessage name='name' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Day Of Begin</label><br/>
                                    <Field type='text' name='dayOfBegin'/><br/>
                                    <ErrorMessage name='dayOfBegin' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Day Of End</label><br/>
                                    <Field type='text' name='dayOfEnd'/><br/>
                                    <ErrorMessage name='dayOfEnd' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Deposit</label><br/>
                                    <Field type='text' name='deposit'/><br/>
                                    <ErrorMessage name='deposit' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Total</label><br/>
                                    <Field type='text' name='total'/><br/>
                                    <ErrorMessage name='total' component='span' className='form-err'/>
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
