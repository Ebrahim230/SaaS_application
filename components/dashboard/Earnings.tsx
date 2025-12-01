export default function Earnings() {
    return (
        <div className="bg-[#1F1F1F] text-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Earnings</h2>
            <p>Total Expense: <strong>$6078.76</strong></p>
            <p>Profit: <span className="text-green-400">+48%</span> from last month</p>
            <div className="relative w-32 h-32 mt-4">
                <svg className="absolute top-0 left-0 w-full h-full">
                    <circle cx="50%" cy="50%" r="45%" stroke="#444" strokeWidth="10" fill="none" />
                    <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="#4ade80"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="283"
                        strokeDashoffset="56"
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xl font-bold">
                    80%
                </div>
            </div>
        </div>
    );
}
