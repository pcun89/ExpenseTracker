import { useContext, useState } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import { AuthContext } from "../AuthContext";

export default function Login() {
    const { setToken } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        // placeholder for API call
        setToken("fake-jwt-token");
    }

    return (
        <Card>
            <CardContent>
                <TextField label="Email" fullWidth sx={{ mb: 2 }} />
                <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} />
                <Button variant="contained" onClick={handleLogin}>Login</Button>
            </CardContent>
        </Card>
    );
}

