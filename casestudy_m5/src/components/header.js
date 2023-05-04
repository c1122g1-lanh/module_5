import {Component} from "react";
import './furama.css';

export class Header extends Component{
    constructor() {
        super();
    }
    render() {
        return (
            <div className="dropdown-header" style={{backgroundColor:"black"}}>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                            <img
                                style={{ marginLeft: "-130px" }}
                                width={40}
                                height={50}
                                src="https://furama-booking.com/wp-content/uploads/2021/10/logo-furama-resort-villa.png"
                                className="attachment-medium size-medium"
                                alt="logo furama resort villa"
                                decoding="async"
                                loading="lazy"
                            />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a href="#" className="nav-link px-2 text-secondary">
                                Trang chủ
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-secondary">
                                Phòng Resort
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-secondary">
                                Phòng Villa
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-secondary">
                                Tiện ích
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-secondary">
                                Tin tức
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2 text-secondary">
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                            type="search"
                            className="form-control form-control-dark"
                            placeholder="Tìm kiếm..."
                            aria-label="Search"
                        />
                    </form>
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">
                            Đăng nhập
                        </button>
                        <button type="button" className="btn btn-warning">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>

        )
    }

}