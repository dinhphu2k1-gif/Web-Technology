import React from "react";
import { toast } from "react-toastify";
import "./EditProduct.scss"
class EditProduct extends React.Component {
    handleSubmit = () => {
        toast.success('Đã lưu !')
    }
    render() {
        return (
            <div className="content">
                <div className="page-title">
                    <div style={{ height: "5vh" }}></div>
                    Sửa sản phẩm
                </div>
                <div className="container-fluid editarea">
                    <div className="page-content">
                        <div className="row">
                            <form className="col-12">
                                <label>Tên sản phẩm</label><br />
                                <input type="text" placeholder="Mazda 3" name="name" /><br />

                            </form>

                        </div>
                        <div className="row">
                            <form className="col-12"><label>Giá </label><br />
                                <input type="text" placeholder="30000" name="name" /> $</form>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <label>Mô tả chi tiết</label><br />
                                <textarea id="w3review" name="w3review" rows="4" cols="50" className="textarea"
                                    placeholder="Mô tả chi tiết"
                                ></textarea>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col-12">
                                <label>Chọn ảnh</label><br />
                                <label for="myfile">Select a file:</label>
                                <input type="file" id="myfile" name="myfile" multiple="multiple" /><br></br>

                            </div>
                        </div>
                        <div className="row">
                            <div><input type="submit" value=" Lưu chỉnh sửa" onClick={() => this.handleSubmit()} /></div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
export default EditProduct;