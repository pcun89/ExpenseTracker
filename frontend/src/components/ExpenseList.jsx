import { useEffect, useState } from "react";
import { api } from "../api";

export default function ExpenseList() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        api
            .get("/expenses", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then(res => setExpenses(res.data));
    }, []);

    return (
        <ul>
            {expenses.map(e => (
                <li key={e.id}>{e.title} - ${e.amount}</li>
            ))}
        </ul>
    );
}
