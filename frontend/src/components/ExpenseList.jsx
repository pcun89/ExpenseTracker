import { useState } from "react";
import {
    List,
    ListItem,
    TextField,
    IconButton,
    Paper
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ExpenseList({ expenses, onUpdate, onDelete }) {
    return (
        <Paper sx={{ mt: 4, p: 2 }}>
            <List>
                {expenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </List>
        </Paper>
    );
}

function ExpenseItem({ expense, onUpdate, onDelete }) {
    const [title, setTitle] = useState(expense.title);
    const [amount, setAmount] = useState(expense.amount);

    const handleSave = () => {
        onUpdate({
            ...expense,
            title,
            amount: Number(amount)
        });
    };

    return (
        <ListItem
            sx={{ display: "flex", gap: 2 }}
            secondaryAction={
                <>
                    <IconButton onClick={handleSave}>
                        <SaveIcon />
                    </IconButton>
                    <IconButton
                        color="error"
                        onClick={() => onDelete(expense.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </>
            }
        >
            <TextField
                value={title}
                onChange={e => setTitle(e.target.value)}
                size="small"
            />
            <TextField
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                size="small"
            />
        </ListItem>
    );
}



