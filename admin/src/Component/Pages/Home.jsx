import React from "react";
import "./Home.css" ;

const featureArray = [
    {
        title : "Revanue",
        income : "2415" , 
        difference : "11.4"
    },
    {
        title : "Sales",
        income : "2415" , 
        difference : "11.4"
    },
    {
        title : "Cost",
        income : "2415" , 
        difference : "11.4"
    }
]

const testArray = [ 1,2,3] ;

const FeaturedItem = (title, income, difference) => {
    return (
        <div>
            <span>{title}</span>
            <span>$ {income}</span>
            <span>{difference}</span>
            <span>Compared to last month</span>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home-container">
            {testArray.map((item) =>
            {
                 
                    <FeaturedItem title="deneme" income="deneme" difference="DENEME"/>
                
            })}
        </div>
    )
}

export default Home ;