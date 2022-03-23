import { useLocation } from "react-router-dom";
import "./Product.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Product = (props) => {

    const location = useLocation();
    const imgBackground = "url(" + location.state.img + ")";


    return (
        <div className="product-container">
            <div className="product-info-container">
                <div className="product-info">
                    <span style={{
                        fontSize: "24px",
                        color: "rgba(6, 0, 14, 0.76)",
                        fontFamily: "'Fira Sans', sans-serif",
                    }}>Edit Product</span>
                    <div style={{ marginBottom: "30px", marginTop: "10px" }}>
                        <div className="img-container" style={{ display: "flex", alignItems: "center" }}>
                            <div style={{
                                background: imgBackground,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                opacity: "1",
                                width: "150px",
                                height: "150px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <div style={{
                                    width: "100%", height: "100%", backgroundColor: "white", opacity: "0.5", display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <CloudUploadIcon sx={{color : "black" ,opacity : "1 !important", backgroundColor : "white", fontSize : "44px !important"}}/>
                                    

                                </div>
                                

                            </div>

                            <input className="product-input" style={{ marginLeft: "30px", fontFamily: "'Fira Sans', sans-serif", fontSize: "20px" }} placeholder={location.state.title}></input>
                        </div>
                    </div>
                    <div className="body-container">
                        <div className="body-item">
                            <span>ID :</span>
                            <input placeholder={location.state.ID} className="product-input"></input>
                        </div>
                        <div className="body-item">
                            <span>Price :</span>
                            <input placeholder={"$" + location.state.price} className="product-input"></input>
                        </div>
                        <div className="body-item">
                            <span>In Stock :</span>
                            <input style={{ border: "none" }} placeholder={location.state.stock !== 0 ? "True" : "False"} readOnly></input>
                        </div>
                        <div className="body-item">
                            <span>Stock :</span>
                            <input placeholder={location.state.stock} className="product-input"></input>

                        </div>

                    </div>
                    <div className="button-container">
                        <button style={{ width: "40%" }} className="update-button">UPDATE</button>
                    </div>
                </div>
                <div className="sales-performance">
                    sales performance
                </div>


            </div>
        </div >

    )
}

export default Product;