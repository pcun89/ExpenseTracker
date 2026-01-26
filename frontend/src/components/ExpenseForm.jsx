import { api } from "../api";

export default function ExpenseForm() {
    async function addExpense() {
        await api.post(
            "/expenses",
            { title: "Food", amount: 12.5, date: "2026-01-01" },
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        );
    }

    return <button onClick={addExpense}>Add Expense</button>;
}
