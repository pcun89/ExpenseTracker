import { useEffect, useState } from "react";
import { api } from "../api";

export default function ExpenseList() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        api
            .get("/expenses", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => setExpenses(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <ul>
            {expenses.map((e) => (
                <li key={e.id}>
                    {e.title} – ${e.amount}
                </li>
            ))}
        </ul>
    );
}

