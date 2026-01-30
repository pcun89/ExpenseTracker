import { useState } from "react";
import { Container } from "@mui/material";

import ExpenseForm from "./components/ExpenseForm";
import Dashboard from "./components/Dashboard";

export default function App() {
    const [expenses, setExpenses] = useState([]);

    function handleAddExpense(expense) {
        setExpenses((prev) => [...prev, expense]);
    }

    return (
        <Container sx={{ mt: 4 }}>
            <ExpenseForm onAdd={handleAddExpense} />
            <Dashboard expenses={expenses} />
        </Container>
    );
}





