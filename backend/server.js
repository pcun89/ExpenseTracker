import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import expenseRoutes from "./routes/expenses.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Root route (Cloud Run + health check)
app.get("/", (req, res) => {
    res.json({
        service: "expense-api",
        status: "running",
        timestamp: new Date().toISOString()
    });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

