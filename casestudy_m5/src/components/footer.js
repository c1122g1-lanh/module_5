import {Component} from "react";

export class Footer extends Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container-fluid">
                <footer className="py-5" style={{ backgroundColor: "black", color: "white" }}>
                    <div className="row">
                        <div className="col-4" style={{ marginLeft: 0 }}>
                            <img
                                width={40}
                                height={50}
                                src="https://furama-booking.com/wp-content/uploads/2021/10/logo-furama-resort-villa.png"
                                className="attachment-medium size-medium"
                                alt="logo furama resort villa"
                                decoding="async"
                                loading="lazy"
                            />
                            <h5 />
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Furama-Booking.Com
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Tổng đài chăm sóc: +84925741444
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Email: bookingfurama@gmail.com
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Địa Chỉ/ Adress: Furama Resort Villa Đà Nẵng: 103 Vo Nguyen Giap,
                                        Ngu Hanh Son, Da Nang
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h5>Chính Sách Quy Định</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        © Chính Sách Và Quy Định Chung
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        © Quy Định Về Thanh Toán
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        © Quy Định Về Xác Nhận Thông Tin Đặt Phòng
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        © Chính Sách Về Hủy Đặt Phòng Và Hoàn Tiền
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        © Chính Sách Bảo Mật Thông Tin
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        © Quy Trình Giải Quyết Khiếu Nại
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 offset-1">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">
                                        Email address
                                    </label>
                                    <input
                                        id="newsletter1"
                                        type="text"
                                        className="form-control"
                                        placeholder="Email address"
                                    />
                                    <button className="btn btn-primary" type="button">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between py-4 my-4 border-top">
                        <p>© 2023 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="link-dark" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#twitter" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-dark" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#instagram" />
                                    </svg>
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-dark" href="#">
                                    <svg className="bi" width={24} height={24}>
                                        <use xlinkHref="#facebook" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>

        )
    }

}