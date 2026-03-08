import { useState, useEffect } from "react";
import {
    TextField,
    Button,
    Card,
    CardContent,
    MenuItem
} from "@mui/material";
import { convertToUSD } from "../utils/currency";

export default function ExpenseForm({ onAdd, editingExpense }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [category, setCategory] = useState("General");
    const [date, setDate] = useState("");

    // When editing an expense, populate the form
    useEffect(() => {
        if (editingExpense) {
            setTitle(editingExpense.title);
            setAmount(editingExpense.amount);
            setCurrency(editingExpense.currency);
            setCategory(editingExpense.category);
            setDate(editingExpense.date);
        }
    }, [editingExpense]);

    function handleSubmit(e) {
        e.preventDefault();

        const expense = {
            id: editingExpense?.id || Date.now(),
            title,
            amount: convertToUSD(Number(amount), currency),
            currency,
            category,
            date
        };

        onAdd(expense);

        // Reset form
        setTitle("");
        setAmount("");
        setCurrency("USD");
        setCategory("General");
        setDate("");
    }

    return (
        <Card sx={{ mb: 3 }}>
            <CardContent>
                <form onSubmit={handleSubmit}>

                    <TextField
                        label="Title"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <TextField
                        label="Amount"
                        type="number"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />

                    <TextField
                        select
                        label="Currency"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={currency}
                        onChange={e => setCurrency(e.target.value)}
                    >
                        {["USD", "EUR", "JPY", "GBP"].map(c => (
                            <MenuItem key={c} value={c}>
                                {c}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Category"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    />

                    <TextField
                        type="date"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />

                    <Button type="submit" variant="contained">
                        {editingExpense ? "Update Expense" : "Add Expense"}
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}




