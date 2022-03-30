import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Cell,
    Tooltip,
    Legend
} from "recharts";

import { comparisionOfBranches } from "../../dummyData";

const CustomizedLabel = (props) => {
    const { x, y, fill, value } = props;
    return (<text
        x={x}
        y={y}

        fontSize='16'
        fontFamily='sans-serif'
        fill={fill}
        textAnchor="start">{value}%</text>
    )
};

export const HorizontalBarChart = () => {

    return (
        <div style={{ width: "90%", height: "90%", marginTop: "10px" }}>
            <ResponsiveContainer width="90%" height="90%">
                <BarChart
                    data={comparisionOfBranches}
                    layout="vertical"
                    barCategoryGap="10%"
                    margin={{ top: 0, right: 50, left: 0, bottom: 0 }}>
                    <Tooltip />
                    <Legend />
                    <XAxis type="number" axisLine={true}
                        stroke='#a0a0a0'
                        strokeWidth={0.5} />
                    <YAxis
                        type="category"
                        width={150}
                        padding={{ left: 20 }}
                        dataKey="name" />

                    <Bar
                        dataKey="Sold Products"
                        fill="#392B58" barSize={20}
                    />

                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}