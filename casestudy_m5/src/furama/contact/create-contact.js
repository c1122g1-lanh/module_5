import {Component} from "react";

export class CreateContact extends Component {
    render() {
        return (
            <div className="row">
                <div className="container1">
                    <form id="contactus" action="" method="post">
                        <h3 style={{textAlign: "center"}}>Tạo mới</h3>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Số hợp đồng"
                                type="text"
                                tabIndex={1}
                                required=""
                                autoFocus=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Ngày bắt đầu"
                                type="text"
                                tabIndex={2}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Ngày kết thúc"
                                type="text"
                                tabIndex={2}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Số tiền cọc trước"
                                type="text"
                                tabIndex={3}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Tổng số tiền thanh toán"
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
