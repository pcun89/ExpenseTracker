import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import { groupByCategory } from "../utils/groupByCategory";

const COLORS = ["#1976d2", "#9c27b0", "#ff9800", "#4caf50", "#f44336"];

export default function ExpenseChart({ expenses }) {
    const data = groupByCategory(expenses);

    return (
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6">Spending by Category</Typography>

                <ResponsiveContainer width="100%" height={380}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                        >
                            {data.map((_, i) => (
                                <Cell key={i} fill={COLORS[i % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}




