import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer,
    Legend
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function CategoryChart({ expenses }) {

    const categoryTotals = {};

    // Aggregate totals by category
    expenses.forEach(expense => {
        categoryTotals[expense.category] =
            (categoryTotals[expense.category] || 0) + expense.amount;
    });

    const data = Object.entries(categoryTotals).map(([category, total]) => ({
        category,
        total
    }));

    return (
        <ResponsiveContainer width="100%" height={350}>
            <PieChart>

                <Pie
                    data={data}
                    dataKey="total"
                    nameKey="category"
                    outerRadius={120}
                    label
                    isAnimationActive={true}
                    animationDuration={900}
                >
                    {data.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                </Pie>

                <Tooltip />
                <Legend />

            </PieChart>
        </ResponsiveContainer>
    );
}