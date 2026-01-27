import { Grid, Card, CardContent, Typography } from "@mui/material";
import ExpenseChart from "./ExpenseChart";

export default function Dashboard({ expenses }) {
    const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h6">Total Spending</Typography>
                        <Typography variant="h4">${total.toFixed(2)}</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={8}>
                <ExpenseChart expenses={expenses} />
            </Grid>
        </Grid>
    );
}
