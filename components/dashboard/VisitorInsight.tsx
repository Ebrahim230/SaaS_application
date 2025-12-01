'use client'
import { Line } from 'react-chartjs-2';
export default function VisitorInsights() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'New Visitors',
                data: [100, 150, 200, 250, 300, 350, 500, 400, 380, 360, 340, 320],
                borderColor: '#60a5fa',
                fill: false,
            },
        ],
    };
    return (
        <div className="bg-[#1F1F1F] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Visitor Insights</h2>
            <Line data={data} />
        </div>
    );
}