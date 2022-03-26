import React from "react";
import "./Home.css";
import Chart from "../Chart/Chart";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { userData, TopSellingProducts, TopSellingBrands } from "../../dummyData";
import Transactions from "../Transactions/Transactions";
import TeamMember from "../TeamMember/TeamMember";
import CustomPieChart from "../Chart/CustomPieChart";
import { MapChart } from "../Chart/CountryMapChart";
import { WorldMap } from "../Chart/WorldMap";

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
                dataKeyY={"user"}
                grid={true}
            />
            <div className="home-widgets">
                <TeamMember />
                <Transactions />
            </div>
            <div className="home-widgets">
                <div className="pie-chart-container">
                    <span className="chartText">Top Selling Brands</span>
                    <CustomPieChart chartData={TopSellingBrands} />
                    <span className="chartText">Top Selling Products</span>
                    <CustomPieChart chartData={TopSellingProducts} />
                </div>
                <div className="map-container">
                    <span className="chartText">Active Visitors</span>
                    <WorldMap />
                </div>

            </div>

        </div>

    )
}

export default Home;
export { FeaturedItem };