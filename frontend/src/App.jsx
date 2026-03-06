import React, { useEffect, useState } from "react";
import { fetchExpenses } from "./api";

/**
 * Main application component
 */
function App() {
    const [expenses, setExpenses] = useState([]);

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

    return (
        <div style={{ padding: "40px", fontFamily: "Arial" }}>
            <h1>Expense Tracker</h1>

            {expenses.length === 0 && <p>No expenses yet.</p>}

            {expenses.map((expense) => (
                <div key={expense.id}>
                    {expense.title} — ${expense.amount} ({expense.category})
                </div>
            ))}
        </div>
    );
}

export default App;






