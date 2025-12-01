'use client'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);
export default function CustomerFulfillment() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Last Month',
                data: [3000, 3200, 3500, 3700, 4087, 4200],
                borderColor: '#8884d8',
                fill: false,
            },
            {
                label: 'This Month',
                data: [4000, 4300, 4700, 4900, 5306, 5500],
                borderColor: '#82ca9d',
                fill: false,
            },
        ],
    };
    return (
        <div className="bg-[#1F1F1F] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Customer Fulfillment</h2>
            <Line data={data} />
        </div>
    );
}