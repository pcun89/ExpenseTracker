import express from "express";
import { pool } from "../db.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM expenses WHERE user_email=$1 ORDER BY date DESC",
        [req.user.email]
    );
    res.json(result.rows);
});

router.post("/", auth, async (req, res) => {
    const { title, amount, date } = req.body;
    await pool.query(
        "INSERT INTO expenses (title, amount, date, user_email) VALUES ($1,$2,$3,$4)",
        [title, amount, date, req.user.email]
    );
    res.sendStatus(201);
});

export default router;
