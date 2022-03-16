import React from "react";
import "./Home.css";
import Chart from "../Chart/Chart";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { userData } from "../../dummyData";


const featureArray = [
    {
        title: "Revanue",
        income: "3218",
        difference: "11.4"
    },
    {
        title: "Sales",
        income: "2415",
        difference: "-6.8"
    },
    {
        title: "Cost",
        income: "1348",
        difference: "9.5"
    }
];

const arrowStyleDown = {
    color: "red"
}

const arrowStyleUp = {
    color: "green"
}


const FeaturedItem = ({ item }) => {
    return (
        <div className="featuredItemwrapper">
            <span className="featuredTitle">{item.title}</span>
            <div className="income-wrapper">
                <span className="income">${item.income}</span>
                <span className="difference">{item.difference}%</span>
                {parseInt(item.difference) > 0 ? <ArrowUpwardIcon style={arrowStyleUp} /> : <ArrowDownwardIcon style={arrowStyleDown} />}
            </div>

            <span className="bottomText">Compared to last month</span>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-container">
                {featureArray.map((item) => (
                    <FeaturedItem item={item} />
                ))}

            </div>
            <Chart data={userData}
                title={"User Analiytics"}
                dataKeyX={"month"}
                dataKeyY={"user"} />
        </div>

    )
}

export default Home;
export { FeaturedItem };