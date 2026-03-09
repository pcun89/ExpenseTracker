import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from "@mui/material";

export default function ExpenseTable({ expenses, onEdit }) {

    return (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>

                <TableHead>
                    <TableRow>
                        <TableCell><strong>Title</strong></TableCell>
                        <TableCell><strong>Category</strong></TableCell>
                        <TableCell><strong>Amount</strong></TableCell>
                        <TableCell><strong>Date</strong></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {expenses.map((expense) => (
                        <TableRow key={expense.id}>

                            <TableCell>{expense.title}</TableCell>
                            <TableCell>{expense.category}</TableCell>
                            <TableCell>${expense.amount}</TableCell>
                            <TableCell>{expense.date}</TableCell>

                            <TableCell>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => onEdit(expense)}
                                >
                                    Edit
                                </Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    );
}