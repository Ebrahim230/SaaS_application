"use client";

import {
  SidebarIcon,
  Home,
  User,
  Trophy,
  BarChart2,
  Package,
  FileText,
  MessageCircle,
  Settings,
  Heart,
  Clock,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Sidebar({ isOpen, setIsOpen, hovered, setHovered }: { isOpen: Boolean, hovered: Boolean, setIsOpen: any, setHovered: any }) {
  const fullyOpen = isOpen || hovered;

  const menuItems = [
    { label: "Dashboard", icon: <Home size={20} />, href: "/" },
    { label: "Profile", icon: <User size={20} />, href: "/profile" },
    { label: "Leaderboard", icon: <Trophy size={20} />, href: "/leaderboard" },
    { label: "Order", icon: <BarChart2 size={20} />, href: "/order" },
    { label: "Products", icon: <Package size={20} />, href: "/products" },
    { label: "Sales Report", icon: <FileText size={20} />, href: "/sales-report" },
    { label: "Message", icon: <MessageCircle size={20} />, href: "/messages" },
    { label: "Settings", icon: <Settings size={20} />, href: "/settings" },
    { label: "Favourites", icon: <Heart size={20} />, href: "/favourites" },
    { label: "History", icon: <Clock size={20} />, href: "/history" },
    { label: "Sign Out", icon: <LogOut size={20} />, href: "/signout" },
  ];

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-0 left-0 h-screen bg-[#2C2D33] text-white border-r border-[#444451] transition-all duration-300 ease-in-out z-50
        ${fullyOpen ? "w-64 md:w-64 sm:w-56" : "w-16 md:w-16 sm:w-14"}
      `}
    >
      <div className="flex items-center justify-between p-4 border-b border-[#444451]">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-[#A9DFD8] transition"
        >
          <img
            src="/business.svg"
            alt="logo"
            className="h-5 w-5 filter invert-[0.52] sepia-[0.05] saturate-[0.4] hue-rotate-190deg brightness-[0.9]"
          />
        </Button>
        {fullyOpen && (
          <SidebarIcon
            size={24}
            className="cursor-pointer text-[#87888C] hover:text-white transition"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      <nav className="mt-4 flex flex-col gap-1 text-[#87888C] overflow-y-auto h-[calc(100vh-64px)] pb-8 pr-1 scrollbar-hide border-r border-[#444451]">
        {menuItems.map((item, i) => (
          <Link key={i} href={item.href}>
            <div className="flex items-center gap-3 p-3 mx-2 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-[#A9DFD8] hover:text-black">
              {item.icon}
              {fullyOpen && <span className="whitespace-nowrap">{item.label}</span>}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};