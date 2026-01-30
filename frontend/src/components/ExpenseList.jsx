import { useState } from "react";
import {
    List,
    ListItem,
    TextField,
    IconButton,
    Paper,
    Button,
    Stack
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

const PAGE_SIZE = 10;

export default function ExpenseList({ expenses, onUpdate, onDelete }) {
    const [page, setPage] = useState(0);

    const pagedExpenses = expenses.slice(
        page * PAGE_SIZE,
        (page + 1) * PAGE_SIZE
    );

    const maxPage = Math.ceil(expenses.length / PAGE_SIZE) - 1;

    return (
        <Paper sx={{ mt: 4, p: 2 }}>
            <List>
                {pagedExpenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </List>

            {/* Pagination controls */}
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <Button
                    disabled={page === 0}
                    onClick={() => setPage(p => p - 1)}
                >
                    Previous
                </Button>
                <Button
                    disabled={page >= maxPage}
                    onClick={() => setPage(p => p + 1)}
                >
                    Next
                </Button>
            </Stack>
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

