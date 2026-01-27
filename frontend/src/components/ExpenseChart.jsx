import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

export default function ExpenseChart({ expenses }) {
    return (
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6">Spending Breakdown</Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={expenses} dataKey="amount" nameKey="title" />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
