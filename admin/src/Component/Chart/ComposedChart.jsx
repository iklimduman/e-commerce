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
    Area
} from "recharts";

const CustomComposedChart = (props) => {

    console.log(props.data);
    return (
        <ComposedChart
            data={props.data}
            width={600}
            height={400}
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
            <YAxis label={{ value: "Sold Item", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />

            <Bar dataKey={props.barKey} barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey={props.lineKey} stroke="#ff7300" />

        </ComposedChart>
    )
}

export default CustomComposedChart;