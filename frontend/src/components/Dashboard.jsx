import { useEffect, useState } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import MonthlyChart from "./MonthlyChart";
import CategoryPie from "./CategoryPie";
import { getMonthlyAnalytics, getCategoryTotals } from "../api/analytics";

export default function Dashboard() {
    const [monthly, setMonthly] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getMonthlyAnalytics().then(setMonthly);
        getCategoryTotals().then(setCategories);
    }, []);

    return (
        <>
            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
                Expense Analytics
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <MonthlyChart data={monthly} />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2 }}>
                        <CategoryPie data={categories} />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}



