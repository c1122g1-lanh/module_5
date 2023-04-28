import {Component} from "react";

export class CreateCustomer extends Component {
    render() {
        return (
            <div className="row">
                <div className="container1">
                    <form id="contactus" action="" method="post">
                        <h3 style={{textAlign: "center"}}>Tạo mới</h3>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Họ tên"
                                type="text"
                                tabIndex={1}
                                required=""
                                autoFocus=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Ngày sinh"
                                type="text"
                                tabIndex={2}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Giới tính"
                                type="text"
                                tabIndex={3}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Số CMND"
                                type="text"
                                tabIndex={3}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Số Điện Thoại"
                                type="text"
                                tabIndex={3}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input placeholder="Email" type="text" tabIndex={3} required=""/>{" "}
                        </fieldset>
                        <fieldset>
                            <select className="form-select" aria-label="Default select example">
                                <option value={0} disabled="" selected="">
                                    Loại khách
                                </option>
                                <option value={1}>Diamond</option>
                                <option value={2}>Platinium</option>
                                <option value={4}>Gold</option>
                                <option value={5}>Silver</option>
                                <option value={6}>Member</option>
                            </select>{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Địa chỉ"
                                type="text"
                                tabIndex={3}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <button
                                name="submit"
                                type="submit"
                                id="contactus-submit"
                                data-submit="...Sending"
                            >
                                <i id="icon" className=""/> Send Now
                            </button>
                            {" "}
                        </fieldset>
                    </form>
                </div>
            </div>

        );
    }
}
