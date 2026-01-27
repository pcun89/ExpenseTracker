import express from "express";
import { getPool } from "../db.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
    try {
        const pool = getPool();
        const result = await pool.query(
            "SELECT * FROM expenses WHERE user_email=$1 ORDER BY date DESC",
            [req.user.email]
        );
        res.json(result.rows);
    } catch (err) {
        console.error("GET /expenses error:", err);
        res.status(500).json({ error: "Failed to fetch expenses" });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        const pool = getPool();
        const { title, amount, date } = req.body;

        await pool.query(
            "INSERT INTO expenses (title, amount, date, user_email) VALUES ($1,$2,$3,$4)",
            [title, amount, date, req.user.email]
        );

        res.sendStatus(201);
    } catch (err) {
        console.error("POST /expenses error:", err);
        res.status(500).json({ error: "Failed to create expense" });
    }
});

export default router;
