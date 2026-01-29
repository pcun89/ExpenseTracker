import { useState } from "react";
import { TextField, Button, Stack, Paper } from "@mui/material";

export default function AddExpenseForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !amount) return;

        onAdd({
            id: Date.now(),
            title,
            amount: Number(amount)
        });

        setTitle("");
        setAmount("");
    };

    return (
        <Paper sx={{ p: 3, mb: 4 }}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row">
                    <TextField
                        label="Expense Name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        fullWidth
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                    >
                        Add
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
}
