import { useEffect, useState } from "react";
import { fetchExpenses, addExpense } from "./api";

export default function App() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses()
            .then(setExpenses)
            .catch(console.error);
    }, []);

    const handleAddExpense = async (expense) => {
        const saved = await addExpense(expense);
        setExpenses([...expenses, saved]);
    };

    return (
        <>
            <ExpenseForm onAdd={handleAddExpense} />
            <Dashboard expenses={expenses} />
        </>
    );
}




