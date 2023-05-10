import {Component} from "react";

export class CreateService extends Component {
    render() {
        return (
            <div className="row">
                <div className="container1">
                    <form id="contactus" action="" method="post">
                        <h3 style={{ textAlign: "center" }}>Tạo mới</h3>
                        <fieldset>
                            <select className="form-select" aria-label="Default select example">
                                <option value={0} disabled="" selected="">
                                    Tên dịch vụ
                                </option>
                                <option value={1}>Villa</option>
                                <option value={2}>Room</option>
                            </select>{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Diện tích"
                                type="text"
                                tabIndex={2}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Hình ảnh"
                                type="text"
                                tabIndex={3}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <textarea
                                placeholder="Mô tả thêm..."
                                tabIndex={5}
                                required=""
                                defaultValue={""}
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
                                <i id="icon" className="" /> Send Now
                            </button>{" "}
                        </fieldset>
                    </form>
                </div>
            </div>

        );
    }
}
