const API_BASE = "https://localhost:5001/api";

export async function getMonthlyAnalytics() {
    const res = await fetch(`${API_BASE}/analytics/monthly`);
    return res.json();
}

export async function getCategoryTotals() {
    const res = await fetch(`${API_BASE}/analytics/categories`);
    return res.json();
}

