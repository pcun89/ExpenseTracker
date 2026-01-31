import { Container } from "@mui/material";
import ExpenseForm from "./components/ExpenseForm";
import Dashboard from "./components/Dashboard";

export default function App() {
    return (
        <Container sx={{ mt: 4 }}>
            <ExpenseForm />
            <Dashboard />
        </Container>
    );
}






