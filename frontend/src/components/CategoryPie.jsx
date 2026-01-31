import { Pie } from "react-chartjs-2";

export default function CategoryPie({ data }) {
    const chartData = {
        labels: data.map(d => d.category),
        datasets: [{
            data: data.map(d => d.total),
        }]
    };

    return <Pie data={chartData} />;
}

