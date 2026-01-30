import { useState } from "react";
import {
    TextField,
    Button,
    Card,
    CardContent,
    MenuItem,
    Stack
} from "@mui/material";

/**
 * ExpenseForm
 * -----------
 * Allows users to add a new expense with title, amount, and category.
 *
 * Props:
 * - onAdd(expense): function
 */
export default function ExpenseForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("General");

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim() || !amount) return;

        onAdd({
            title: title.trim(),
            amount: Number(amount),
            category
        });

        setTitle("");
        setAmount("");
        setCategory("General");
    }

    return (
        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            fullWidth
                            required
                        />

                        <TextField
                            label="Amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            fullWidth
                            required
                            inputProps={{ min: 0, step: "0.01" }}
                        />

                        <TextField
                            select
                            label="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            fullWidth
                        >
                            <MenuItem value="General">General</MenuItem>
                            <MenuItem value="Food">Food</MenuItem>
                            <MenuItem value="Transportation">Transportation</MenuItem>
                            <MenuItem value="Entertainment">Entertainment</MenuItem>
                            <MenuItem value="Utilities">Utilities</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                        >
                            Add Expense
                        </Button>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    );
}


