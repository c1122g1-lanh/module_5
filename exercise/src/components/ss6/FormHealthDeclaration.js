import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import React from "react";

export function FormHealthDeclaration() {
    return (
        <Formik initialValues={
            {
                name: '',
                numberId: '',
                dayOfBirth: '',
                gender: '',
                nationality: '',
                company: '',
                department: '',
                status: '',
                country: '',
                district: '',
                ward: '',
                apartmentNumber: '',
                phoneNumber: '',
                email: '',
                move: '',
                symptom: '',
                contact: ''
            }
        }
                validationSchema={Yup.object({
                        name: Yup.string().required('Vui lòng nhập tên...'),
                        numberId: Yup.number().required('Vui lòng nhập số CMND ...'),
                        dayOfBirth: Yup.number().integer().required('Vui lòng nhập ngày sinh...')
                            .min(1990),
                        nationality: Yup.string().required('Vui lòng nhập quốc tịch...'),
                        country: Yup.string().required('Vui lòng nhập quốc tịch...'),
                        district: Yup.string().required('Vui lòng nhập tỉnh...'),
                        ward: Yup.string().required('Vui lòng nhập huyện...'),
                        apartmentNumber: Yup.string().required('Vui lòng nhập xã...'),
                        phoneNumber: Yup.string().required('Vui lòng nhập số điện thoại...'),
                        email: Yup.string().required('Vui lòng nhập email...').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/)
                    }
                )}

                onSubmit={(values) => {
                    console.log(values)
                }}>
            <div className='container'>
                <div className='row'>
                    <h1>Tờ khai y tế</h1>
                    <Form>
                        <div className='row'>
                            <label> Họ và tên</label><br/>
                            <Field type='text' name='name'/>
                            <ErrorMessage name='name' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Số CMND</label><br/>
                            <Field type='number' name='numberId'/>
                            <ErrorMessage name='numberId' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Ngày sinh</label>
                            <Field type='number' name='dayOfBirth'/>
                            <ErrorMessage name='dayOfBirth' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='row-cols-6'>
                                <span>Giới tính</span>
                                <Field type='radio' name='gender' value='1'/>
                                <span>Nam</span>
                                <Field type='radio' name='gender' value='2'/>
                                <span>Nữ</span>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Quốc tịch</label><br/>
                            <Field type='text' name='nationality'/>
                            <ErrorMessage name='nationality' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Công ty làm việc</label><br/>
                            <Field type='text' name='company'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Bộ phận làm việc</label><br/>
                            <Field type='text' name='department'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className='row-cols-6'>
                                <span>Có thẻ bảo hiểm y tế</span>
                                <Field type='checkbox' name='status'/>
                            </div>

                        </div>
                        <br/>
                        <h3>Địa chỉ liên lạc tại Việt Nam</h3><br/>
                        <div className='row'>
                            <label> Tỉnh/ Thành phố</label><br/>
                            <Field type='text' name='country'/>
                            <ErrorMessage name='country' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Quận/Huyện</label><br/>
                            <Field type='text' name='district'/>
                            <ErrorMessage name='district' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Phường/xã</label><br/>
                            <Field type='text' name='ward'/>
                            <ErrorMessage name='ward' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Số nhà</label><br/>
                            <Field type='text' name='apartmentNumber'/>
                            <ErrorMessage name='apartmentNumber' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <label> Số điện thoại</label><br/>
                            <Field type='text' name='phoneNumber'/>
                            <ErrorMessage name='phoneNumber' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Email</label><br/>
                            <Field type='text' name='email'/>
                            <ErrorMessage name='email' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <h4>Trong vòng 14 ngày Anh/Chị đã đến vùng lãnh thổ/Quốc gia nào (có thể đi qua nhiều quốc
                                gia) ?</h4><br/>
                            <textarea type='text' name='move'/>
                            <ErrorMessage name='move' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <h4>Trong vòng 14 ngày Anh/Chị có xuất hiện dấu hiệu nào dưới đây không ?</h4><br/>
                            <div className='row-cols-6'>

                                <Field type='checkbox' name='symptom' value='1'/>
                                <span>Sốt</span><br/>
                                <Field type='checkbox' name='symptom' value='2'/>
                                <span>Ho</span><br/>
                                <Field type='checkbox' name='symptom' value='3'/>
                                <span>Khó thở</span><br/>
                                <Field type='checkbox' name='symptom' value='4'/>
                                <span>Viêm phổi</span><br/>
                                <Field type='checkbox' name='symptom' value='5'/>
                                <span>Đạu họng</span><br/>
                                <Field type='checkbox' name='symptom' value='6'/>
                                <span>Mệt mỗi</span><br/>
                            </div>
                            <ErrorMessage name='symptom' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <h4>Trong vòng 14 ngày Anh/Chị có tiếp xúc với ?</h4><br/>
                            <div className='row-cols-6'>
                                <Field type='checkbox' name='contact' value='1'/>
                                <span>Người bệnh hoặc nghi ngờ mắc bệnh Covid-19</span><br/>
                                <Field type='checkbox' name='contact' value='2'/>
                                <span>Người từ nước có bệnh Covid-19</span><br/>
                                <Field type='checkbox' name='contact' value='3'/>
                                <span>Người có biểu hiện (sốt,ho,khó thở,viêm phổi)</span><br/>
                            </div>
                            <ErrorMessage name='contact' component='span' className='form-err'/>
                        </div>
                        <br/>
                        <div className='row'>
                            <button type='submit'>Lụm</button>
                        </div>

                    </Form>
                </div>
            </div>
        </Formik>
    )
}