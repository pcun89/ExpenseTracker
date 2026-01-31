import { Bar } from "react-chartjs-2";

export default function MonthlyChart({ data }) {
    const chartData = {
        labels: data.map(d => d.month),
        datasets: [{
            label: "Total Spend ($)",
            data: data.map(d => d.total),
        }]
    };

    return <Bar data={chartData} />;
}

