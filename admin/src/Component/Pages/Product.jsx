import { useLocation } from "react-router-dom";
import "./Product.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CustomComposedChart from "../Chart/ComposedChart";
import PieChartCustomLabel from "../Chart/PieChartCustomLabel";
import { MapChart } from "../Chart/CountryMapChart";
import { ColorDescription } from "../Chart/ColorDescription";
import CalendarChart from "../Chart/Calendar";
import { HorizontalBarChart } from "../Chart/HorizontalBarChart";

import { salesPerformance, ageDistribution } from "../../dummyData";


const Product = (props) => {

    const location = useLocation();
    const imgBackground = "url(" + location.state.img + ")";
    const COLORS = ["#620043", "#392B58", "#645E9D", "#6C969D", '#99D5C9'];
    const AgeArr = ["18-25", "25-34", "35-50", "50-65", "65+"]


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
                                justifyContent: "center",
                                position: "realtive"
                            }}>
                                <div style={{
                                    width: "100%", height: "100%", backgroundColor: "white", opacity: "0.5", display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                </div>
                                <CloudUploadIcon sx={{
                                    color: "rgb(331,175)",
                                    opacity: "1 !important",
                                    position: "absolute",
                                    fontSize: "44px !important"
                                }}
                                />


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
                    <span style={{
                        fontSize: "24px",
                        color: "rgba(6, 0, 14, 0.76)",
                        fontFamily: "'Fira Sans', sans-serif",
                    }}>Sales performance</span>
                    <CustomComposedChart data={salesPerformance} dataKey="name" barKey="actual" lineKey="target" />
                </div>

            </div>
            <div className="second-row-container">
                <div className="age-distribution">
                    <span style={{
                        fontSize: "24px",
                        color: "rgba(6, 0, 14, 0.76)",
                        fontFamily: "'Fira Sans', sans-serif",
                        marginRight: "auto"
                    }}>Age Distribution of Customers</span>
                    <PieChartCustomLabel data={ageDistribution} />

                    <ColorDescription
                        colorArr={COLORS}
                        ageArr={ageDistribution}
                        containerWidth="60%"
                    />
                </div>
                <div className="top-selling-chart">
                    <span style={{
                        fontSize: "24px",
                        color: "rgba(6, 0, 14, 0.76)",
                        fontFamily: "'Fira Sans', sans-serif",
                        marginRight: "auto"

                    }}>Top Selling Branches</span>
                    <MapChart />
                </div>
            </div>
            <div className="second-row-container">
                <div className="calendar">
                    <span style={{
                        fontSize: "24px",
                        color: "rgba(6, 0, 14, 0.76)",
                        fontFamily: "'Fira Sans', sans-serif",

                    }}>Planned Sales</span>
                    <CalendarChart />
                </div>
                <div className="branch-contribution">
                    <span style={{
                        fontSize: "24px",
                        color: "rgba(6, 0, 14, 0.76)",
                        fontFamily: "'Fira Sans', sans-serif",

                    }}>Comparison of Branches</span>
                    <HorizontalBarChart />
                </div>
            </div>
        </div>

    )
}

export default Product;