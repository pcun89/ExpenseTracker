import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const COLORS = [
    "#1976d2",
    "#9c27b0",
    "#2e7d32",
    "#ed6c02",
    "#d32f2f",
    "#0288d1"
];

export default function ExpenseChart({ expenses }) {
    const grouped = new Map();

    expenses.forEach(({ category, amount }) => {
        grouped.set(category, (grouped.get(category) || 0) + amount);
    });

    const data = Array.from(grouped.entries()).map(([name, value]) => ({
        name,
        value
    }));

    if (data.length === 0) {
        return (
            <Typography sx={{ mt: 2 }}>
                No expenses to display
            </Typography>
        );
    }

    return (
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6">Spending by Category</Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            label
                        >
                            {data.map((_, i) => (
                                <Cell
                                    key={i}
                                    fill={COLORS[i % COLORS.length]}
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



