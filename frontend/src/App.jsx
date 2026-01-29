import { useState } from "react";
import { Container, Typography } from "@mui/material";
import Dashboard from "./components/Dashboard";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function App() {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses(prev => [...prev, expense]);
    };

    const updateExpense = (updatedExpense) => {
        setExpenses(prev =>
            prev.map(e =>
                e.id === updatedExpense.id ? updatedExpense : e
            )
        );
    };

    const deleteExpense = (id) => {
        setExpenses(prev =>
            prev.filter(e => e.id !== id)
        );
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Expense Tracker
            </Typography>

            <AddExpenseForm onAdd={addExpense} />
            <Dashboard expenses={expenses} />
            <ExpenseList
                expenses={expenses}
                onUpdate={updateExpense}
                onDelete={deleteExpense}
            />
        </Container>
    );
}




