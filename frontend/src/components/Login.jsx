import { api } from "../api";

export default function Login() {
    async function login() {
        const res = await api.post("/auth/login", { email: "user@test.com" });
        localStorage.setItem("token", res.data.token);
    }

    return <button onClick={login}>Login</button>;
}
