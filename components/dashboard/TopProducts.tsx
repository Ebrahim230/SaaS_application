export default function TopProducts() {
    const products = [
        { name: 'Home Decor Range', percentage: 48 },
        { name: 'Disney Princess Dress', percentage: 17 },
        { name: 'Bathroom Essentials', percentage: 13 },
        { name: 'Apple Smartwatch', percentage: 29 },
    ];
    return (
        <div className="bg-[#1F1F1F] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Top Products</h2>
            {products.map((product, idx) => (
                <div key={idx} className="mb-3">
                    <div className="flex justify-between text-sm">
                        <span>{product.name}</span>
                        <span>{product.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 h-2 rounded">
                        <div
                            className="bg-blue-500 h-2 rounded"
                            style={{ width: `${product.percentage}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}