import { useState } from "react";
import { Container, Typography } from "@mui/material";
import Dashboard from "./components/Dashboard";
import AddExpenseForm from "./components/AddExpenseForm";

export default function App() {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses(prev => [...prev, expense]);
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Expense Tracker
            </Typography>

            <AddExpenseForm onAdd={addExpense} />
            <Dashboard expenses={expenses} />
        </Container>
    );
}


