'use client'
import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function Hero() {
    const data = [
        { name: 'Mon', Volume: 120, Service: 80 },
        { name: 'Tue', Volume: 200, Service: 160 },
        { name: 'Wed', Volume: 150, Service: 120 },
        { name: 'Thu', Volume: 80, Service: 60 },
        { name: 'Fri', Volume: 100, Service: 90 },
        { name: 'Sat', Volume: 130, Service: 70 },
    ]

    const CustomLegend = () => (
        <div className="flex justify-between items-center text-gray-500 mt-2 px-4">
            <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#A9DFD8] rounded-full"></span>
                Volume
            </span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#87888C] rounded-full"></span>
                Service
            </span>
        </div>
    )

    return (
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-6">
            <div className="w-full lg:w-3/5 text-[#87888C] flex flex-col gap-4">
                <div className="p-4">
                    <h2 className="font-bold text-2xl">Today's Sales</h2>
                    <p className="text-sm">Sales Summary</p>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-4 pl-4">
                    <div className="flex flex-col gap-1 w-1/2 sm:w-1/4 p-4 bg-[#1F1F1F] rounded-lg">
                        <img src="/icon1.svg" alt="total sales" className="w-6 h-6 drop-shadow-md" />
                        <span className="font-inter font-semibold text-[15px] leading-4 text-white">$5k</span>
                        <span className="font-inter font-medium text-[10px] text-[#E8E8E8]">Total Sales</span>
                        <span className="font-inter font-medium text-[8px] text-[#FEB95A]">+10% from yesterday</span>
                    </div>
                    <div className="flex flex-col gap-1 w-1/2 sm:w-1/4 p-4 bg-[#1F1F1F] rounded-lg">
                        <img src="/icon2.svg" alt="total orders" className="w-6 h-6 drop-shadow-md" />
                        <span className="font-inter font-semibold text-[15px] leading-4 text-white">500</span>
                        <span className="font-inter font-medium text-[10px] text-[#E8E8E8]">Total Order</span>
                        <span className="font-inter font-medium text-[8px] text-[#A9DFD8]">+8% from yesterday</span>
                    </div>
                    <div className="flex flex-col gap-1 w-1/2 sm:w-1/4 p-4 bg-[#1F1F1F] rounded-lg">
                        <img src="/icon3.svg" alt="product sold" className="w-6 h-6 drop-shadow-md" />
                        <span className="font-inter font-semibold text-[15px] leading-4 text-white">9</span>
                        <span className="font-inter font-medium text-[10px] text-[#E8E8E8]">Product Sold</span>
                        <span className="font-inter font-medium text-[8px] text-[#F2C8ED]">+2% from yesterday</span>
                    </div>
                    <div className="flex flex-col gap-1 w-1/2 sm:w-1/4 p-4 bg-[#1F1F1F] rounded-lg">
                        <img src="/icon4.svg" alt="new customer" className="w-6 h-6 drop-shadow-md" />
                        <span className="font-inter font-semibold text-[15px] leading-4 text-white">12</span>
                        <span className="font-inter font-medium text-[10px] text-[#E8E8E8]">New Customer</span>
                        <span className="font-inter font-medium text-[8px] text-[#20AEF3]">+3% from yesterday</span>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-2/5 flex flex-col gap-2">
                <div className="p-4">
                    <span className="font-bold text-2xl text-[#87888C] pl-4">Level</span>
                </div>
                <div className="w-full rounded-lg">
                    <ResponsiveContainer width="100%" height={160}>
                        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }} barCategoryGap="40%">
                            <Tooltip
                                contentStyle={{ backgroundColor: '#2C2C2C', borderRadius: 6, border: 'none' }}
                                itemStyle={{ color: '#A9DFD8' }}
                            />
                            <Legend verticalAlign="bottom" content={<CustomLegend />} />
                            <Bar dataKey="Volume" stackId="a" fill="#A9DFD8" radius={[0, 0, 0, 0]} barSize={12} />
                            <Bar dataKey="Service" stackId="a" fill="#87888C" radius={[4, 4, 0, 0]} barSize={12} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}