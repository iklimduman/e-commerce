import React from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
    ResponsiveContainer
} from "recharts";

const CustomComposedChart = (props) => {

    return (
        <ResponsiveContainer width="90%" height ="90%">
            <ComposedChart
                data={props.data}
                
                margin={{
                    top: 20,
                    right: 80,
                    bottom: 20,
                    left: 20
                }}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis
                    dataKey={props.dataKey}
                    label={{ value: "Months", position: "insideBottomRight", offset: -10 }}
                    scale="band"
                />
                <YAxis label={{ value: "Item Count", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend />

                <Bar dataKey={props.barKey} barSize={20} fill="#3c3385 "  />
                <Line type="monotone" dataKey={props.lineKey} stroke="red" dot={{ stroke: 'red', strokeWidth: 2, r: 4,strokeDasharray:''}}/>
                

            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default CustomComposedChart;