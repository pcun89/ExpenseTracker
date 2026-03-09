import React, { useEffect, useState } from "react";
import { fetchExpenses, addExpense, updateExpense } from "./api";
import ExpenseForm from "./components/ExpenseForm";
import CategoryChart from "./components/CategoryChart";
import ExpenseTable from "./components/ExpenseTable";


/**
 * Main application component
 */
function App() {

    const [expenses, setExpenses] = useState([]);
    const [editingExpense, setEditingExpense] = useState(null);

    /**
     * Load expenses when component mounts
     */
    useEffect(() => {
        loadExpenses();
    }, []);

    /**
     * Fetch expenses from API
     */
    async function loadExpenses() {
        const data = await fetchExpenses();

        // backend returns { total, items }
        setExpenses(data.items || []);
    }

    /**
     * Add or update expense
     */
    async function handleAdd(expense) {

        if (editingExpense) {
            await updateExpense(editingExpense.id, expense);
            setEditingExpense(null);
        } else {
            await addExpense(expense);
        }

        // reload from backend
        loadExpenses();
    }

    /**
     * Select expense for editing
     */
    function handleEdit(expense) {
        setEditingExpense(expense);
    }

    return (
        <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: 900, margin: "auto" }}>

            <h1>Expense Tracker</h1>

            {/* Expense Form */}
            <ExpenseForm
                onAdd={handleAdd}
                editingExpense={editingExpense}
            />

            {/* Category Chart */}
            <CategoryChart expenses={expenses} />

            <h2>Expenses</h2>

            {expenses.length === 0 && <p>No expenses yet.</p>}

            {expenses.map((expense) => (
                <div
                    key={expense.id}
                    style={{
                        padding: "10px",
                        borderBottom: "1px solid #ddd",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >

                    <div>
                        <strong>{expense.title}</strong> — ${expense.amount} ({expense.category})
                    </div>

                    <button onClick={() => handleEdit(expense)}>
                        Edit
                    </button>

                </div>
            ))}

        </div>
    );
}

export default App;






