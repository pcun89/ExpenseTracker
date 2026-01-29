import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const COLORS = [
    "#1976d2",
    "#9c27b0",
    "#2e7d32",
    "#ed6c02",
    "#d32f2f",
    "#0288d1",
    "#6a1b9a"
];

export default function ExpenseChart({ expenses }) {
    if (!expenses.length) {
        return (
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6">
                        Spending Breakdown
                    </Typography>
                    <Typography>No expenses to display</Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6">
                    Spending Breakdown
                </Typography>

                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={expenses}
                            dataKey="amount"
                            nameKey="title"
                            outerRadius={100}
                        >
                            {expenses.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}


