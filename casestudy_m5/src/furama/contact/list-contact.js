import {Component} from "react";

export class ListContact extends Component {
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
                            <th>Số hợp đồng</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Số tiền cọc trước</th>
                            <th>Tổng số tiền thanh toán</th>
                            <th>Chức năng</th>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>1</td>
                            <td>HD-01</td>
                            <td>01-01-2023</td>
                            <td>05-01-2023</td>
                            <td>1.000.000</td>
                            <td>5.000.000</td>
                            <td>
                                <button className="btn btn-primary">Chi tiết</button>
                            </td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>2</td>
                            <td>HD-02</td>
                            <td>01-01-2023</td>
                            <td>07-01-2023</td>
                            <td>2.000.000</td>
                            <td>5.000.000</td>
                            <td>
                                <button className="btn btn-primary">Chi tiết</button>
                            </td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>1</td>
                            <td>HD-03</td>
                            <td>01-03-2023</td>
                            <td>05-03-2023</td>
                            <td>1.000.000</td>
                            <td>4.000.000</td>
                            <td>
                                <button className="btn btn-primary">Chi tiết</button>
                            </td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>4</td>
                            <td>HD-04</td>
                            <td>01-07-2023</td>
                            <td>07-07-2023</td>
                            <td>3.000.000</td>
                            <td>6.000.000</td>
                            <td>
                                <button className="btn btn-primary">Chi tiết</button>
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
