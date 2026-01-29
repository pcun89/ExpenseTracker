import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

export default function ExpenseChart({ expenses = [] }) {
    const chartData = expenses.map(e => ({
        title: e.title || "Unknown",
        amount: Number(e.amount) || 0
    }));

    return (
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6">Spending Breakdown</Typography>

                {chartData.length === 0 ? (
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        No expenses to display
                    </Typography>
                ) : (
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="amount"
                                nameKey="title"
                                outerRadius={100}
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                )}
            </CardContent>
        </Card>
    );
}

