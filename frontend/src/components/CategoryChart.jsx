import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function CategoryChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5292/api/analytics/categories")
            .then(res => res.json())
            .then(setData);
    }, []);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="total"
                    nameKey="category"
                    outerRadius={100}
                >
                    {data.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}
