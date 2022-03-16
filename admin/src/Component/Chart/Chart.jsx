import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Chart.css";

const Chart = ({ data, title, dataKeyX, dataKeyY, grid}) => {

    return (
        <div className="chart-container">
            <span className="chartTitle">{title}</span>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={data}
                    margin={{
                        top: 25,
                        right: 25
                    }}>
                    <XAxis dataKey={dataKeyX} stroke="#543F60" />
                    <YAxis />
                    <Line type="monotone" dataKey={dataKeyY} stroke="#543F60" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#DDDDDD" strokeDasharray="5 5" />}
                    
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;