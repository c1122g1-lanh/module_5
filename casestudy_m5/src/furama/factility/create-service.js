import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import * as facilityService from "../../service/facilityService";
import {
    findAllRentType,
    findAllServiceAdd,
    findAllServiceFree
} from "../../service/facilityService";

export function CreateService() {
    const navigate = useNavigate();
    const [rentalTypes, setRentalTypes] = useState([]);
    const [serviceAdds, setServiceAdds] = useState([]);
    const [serviceFrees, setServiceFrees] = useState([]);
    useEffect(() => {
            const list = async () => {
                setRentalTypes(await findAllRentType());
                setServiceAdds(await findAllServiceAdd());
                setServiceFrees(await findAllServiceFree());
            };
            list();
        }, []
    )
    return (
        <>

            <Formik
                initialValues={{
                    "id": '',
                    "name": '',
                    "image": '',
                    "area": '',
                    "price": '',
                    "maxPeople": '',
                    "rentType": '',
                    "standardRoom": '',
                    "descriptionOtherCovenience":'',
                    "poolArea": '',
                    "numberOfFloors": '',
                    "serviceFree": '',
                    "serviceAdd": ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Nhập tên dịch vụ....'),
                    image: Yup.string().required('Nhập ảnh....'),
                    area: Yup.string().required('Nhập diện tích...'),
                    price: Yup.string().required('Nhập giá...'),
                    maxPeople: Yup.number().integer('Nhập số người tối đa...'),
                    rentType: Yup.string().required('Nhập kiểu thuê... '),
                    standardRoom: Yup.string().required('Nhập tiêu chuẩn phòng...'),
                    descriptionOtherCovenience:Yup.string().required('Nhập mô tả...'),
                    poolArea: Yup.string().required('Nhập diện tích hồ bơi...'),
                    numberOfFloors: Yup.string().required('Nhập số tầng...'),
                    serviceFree: Yup.string().required('Nhập dịch vụ miễn phí...'),
                    serviceAdd: Yup.string().required('Nhập dịch vụ đi kèm...')
                })}
                onSubmit={(facility) => {
                    const create = async () => {
                        await facilityService.save(facility)
                    }
                    create()
                    alert("Tạo mới thành công !")
                    navigate("/facility")
                }}>
                <div className="container">
                    <div className='row'>
                        <h3>Tạo mới</h3>
                        <Link to={"/facility"}>Quay về danh sách dịch vụ</Link>
                    </div>
                    <div className='row'>
                        <Form>
                            <div className='mb-3'>
                                <label className='form-label'>Tên dịch vụ</label><br/>
                                <Field type='text' name='name'/><br/>
                                <ErrorMessage name='name' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Hình ảnh</label><br/>
                                <Field type='text' name='image'/><br/>
                                <ErrorMessage name='image' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Diện tích</label><br/>
                                <Field type='text' name='area'/><br/>
                                <ErrorMessage name='area' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Giá</label><br/>
                                <Field type='text' name='price'/><br/>
                                <ErrorMessage name='price' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Số lượng người</label><br/>
                                <Field type='text' name='maxPeople'/><br/>
                                <ErrorMessage name='maxPeople' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Kiểu thuê</label><br/>
                                <Field
                                    as={"select"}
                                    name={"rentType"}
                                >
                                    {
                                        rentalTypes.map((rentType, index) => (
                                            <option key={index} value={rentType.id}>
                                                {rentType.name}
                                            </option>
                                        ))
                                    }
                                </Field><br/>
                                <ErrorMessage name='rentType' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Tiêu chuẩn phòng</label><br/>
                                <Field type='text' name='standardRoom'/><br/>
                                <ErrorMessage name='standardRoom' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Mô tả</label><br/>
                                <Field type='text' name='descriptionOtherCovenience'>

                                </Field><br/>
                                <ErrorMessage name='descriptionOtherCovenience' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Diện tích hồ bới</label><br/>
                                <Field type='text' name='poolArea'/><br/>
                                <ErrorMessage name='poolArea' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Số tầng</label><br/>
                                <Field type='text' name='numberOfFloors'/><br/>
                                <ErrorMessage name='numberOfFloors' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Dịch vụ miễn phí</label><br/>
                                <Field
                                    as={"select"}
                                    name={"serviceFree"}
                                >
                                    {
                                        serviceFrees.map((serviceFree, index) => (
                                            <option key={index} value={serviceFree.id}>
                                                {serviceFree.name}
                                            </option>
                                        ))
                                    }
                                </Field><br/>
                                <ErrorMessage name='serviceFree' component='span' className='form-err'/>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Dịch vụ đi kèm</label><br/>
                                <Field
                                    as={"select"}
                                    name={"serviceAdd"}
                                >
                                    {
                                        serviceAdds.map((serviceAdd, index) => (
                                            <option key={index} value={serviceAdd.id}>
                                                {serviceAdd.name}
                                            </option>
                                        ))
                                    }
                                </Field><br/>
                                <ErrorMessage name='serviceAdd' component='span' className='form-err'/>
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
