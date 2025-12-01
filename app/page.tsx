import CustomerFulfillment from "@/components/dashboard/CustomFulfilment";
import Earnings from "@/components/dashboard/Earnings";
import Hero from "@/components/dashboard/Hero";
import NavBar from "@/components/dashboard/navBar";
import TopProducts from "@/components/dashboard/TopProducts";
import VisitorInsights from "@/components/dashboard/VisitorInsight";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#2C2D33] font-sans">
      <NavBar />
      <Hero />
      <div className="min-h-screen bg-[#2C2D33] p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopProducts />
        <CustomerFulfillment />
        <Earnings />
        <VisitorInsights />
      </div>
    </div>
  );
}