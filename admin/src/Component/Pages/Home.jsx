import React from "react";
import "./Home.css";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

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
] ;

const arrowStyle = {
    color : "rgba(12,1,3,0.76)" 
}


const FeaturedItem = ({ item }) => {
    return (
        <div className="featuredItemwrapper">
            <span className="featuredTitle">{item.title}</span>
            <div className="income-wrapper">
                <span className="income">${item.income}</span>
                <span className="difference">{item.difference}%</span>
                { parseInt(item.difference) > 0 ? <ArrowUpwardIcon style={arrowStyle}/> : <ArrowDownwardIcon style={arrowStyle}/>}
            </div>

            <span className="bottomText">Compared to last month</span>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home-container">
            {featureArray.map((item) => (
                <FeaturedItem item={item} />
            ))}
        </div>
    )
}

export default Home;
export { FeaturedItem };