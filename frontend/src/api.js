import axios from "axios";

/**
 * Axios instance
 */
export const api = axios.create({
    baseURL: "https://expense-api-266155717887.us-central1.run.app/api"
});

/**
 * Attach JWT automatically (if exists)
 */
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

/**
 * EXPENSE API
 */
export const fetchExpenses = async () => {
    const res = await api.get("/expenses");
    return res.data;
};

export const addExpense = async (expense) => {
    const res = await api.post("/expenses", expense);
    return res.data;
};

export const updateExpense = async (id, expense) => {
    const res = await api.put(`/expenses/${id}`, expense);
    return res.data;
};

export const deleteExpense = async (id) => {
    await api.delete(`/expenses/${id}`);
};

/**
 * ANALYTICS API
 */
export const fetchCategoryAnalytics = async () => {
    const res = await api.get("/analytics/categories");
    return res.data;
};

export const fetchMonthlyAnalytics = async () => {
    const res = await api.get("/analytics/monthly");
    return res.data;
};