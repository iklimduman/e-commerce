import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#620043", "#392B58", "#645E9D", "#6C969D", '#99D5C9'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    data
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (

        <text
            x={x}
            y={y}
            fill="black"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}% `}
        </text>
    );
};


export default function PieChartCustomLabel(props) {
    return (
        <PieChart width={300} height={300}>
            <Pie
                data={props.data}
                cx={150}
                cy={150}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                innerRadius={60}
                fill="#8884d8"
                dataKey="value"
            >
                {props.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}