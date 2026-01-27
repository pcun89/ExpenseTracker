import axios from "axios";

export const api = axios.create({
    baseURL: "https://expense-api-266155717887.us-central1.run.app/api",
});


export async function fetchExpenses(token) {
    const res = await fetch(`${API_BASE}/api/expenses`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.json();
}

export async function addExpense(expense, token) {
    await fetch(`${API_BASE}/api/expenses`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(expense)
    });
}
