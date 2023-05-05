import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import React from "react";

export function FormInfo() {

    return (
        <>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Nhập tên...'),
                        email: Yup.string().required('Nhập email...')
                            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Vui lòng nhập đúng định dạng : lanh@gmail.com'),
                        phone: Yup.number().integer().required('Nhập số....')
                    })}
                    onSubmit={(value) =>{
                        console.log(value)
                    }}

            >
                <div className='container'>
                    <div className='row'>
                        <h1>Contact form</h1>
                        <Form>
                            <div className='mb-3'>
                                <label className='form-label'>Name</label><br/>
                                <Field type='text' name='name'/><br/>
                                <ErrorMessage name='name' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Email</label><br/>
                                <Field type='email' name='email'/><br/>
                                <ErrorMessage name='email' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Phone</label><br/>
                                <Field type='number' name='phone'/><br/>
                                <ErrorMessage name='phone' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Message</label><br/>
                                <textarea type='text' name='message'/>
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