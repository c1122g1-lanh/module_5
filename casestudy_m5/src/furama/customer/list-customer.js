import {Component} from "react";

export class ListCustomer extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h3 style={{ textAlign: "center" }}>Danh sách khách hàng</h3>
                    <a href="">Tạo mới</a>
                    <table className="table table-striped ">
                        <tbody>
                        <tr className="table-dark">
                            <th>Stt</th>
                            <th>Họ và tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Số CMND</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Loại khách</th>
                            <th>Địa chỉ</th>
                            <th colSpan={3}>Chức năng</th>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>1</td>
                            <td>Nguyễn Minh Lãnh</td>
                            <td>01-01-1990</td>
                            <td>Nam</td>
                            <td>111111111</td>
                            <td>0901111111</td>
                            <td>lanh@gmail.com</td>
                            <td>Diamond</td>
                            <td>Quảng Nam</td>
                            <td>
                                <button className="btn btn-primary">Chi tiết</button>
                            </td>
                            <td>
                                <button className="btn btn-warning">Sửa</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>2</td>
                            <td>Lê Phát Đạt</td>
                            <td>01-01-1999</td>
                            <td>Nam</td>
                            <td>111111112</td>
                            <td>0901111112</td>
                            <td>dat@gmail.com</td>
                            <td>Platinium</td>
                            <td>Huế</td>
                            <td>
                                <button className="btn btn-primary">Chi tiết</button>
                            </td>
                            <td>
                                <button className="btn btn-warning">Sửa</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>3</td>
                            <td>Nguyễn Văn Minh</td>
                            <td>01-01-1998</td>
                            <td>Nam</td>
                            <td>111111113</td>
                            <td>0901111113</td>
                            <td>minh@gmail.com</td>
                            <td>Gold</td>
                            <td>Nghệ An</td>
                            <td>
                                <button className="btn btn-primary">Chi tiết</button>
                            </td>
                            <td>
                                <button className="btn btn-warning">Sửa</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>4</td>
                            <td>Lê Văn Chính</td>
                            <td>01-01-2003</td>
                            <td>Nam</td>
                            <td>111111112</td>
                            <td>0901111112</td>
                            <td>chinh@gmail.com</td>
                            <td>Sliver</td>
                            <td>Quảng Bình</td>
                            <td>
                                <button className="btn btn-primary">Chi tiết</button>
                            </td>
                            <td>
                                <button className="btn btn-warning">Sửa</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
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

        );
    }
}
