"use client";

import { useState } from "react";
import Sidebar from "@/components/common/sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarHovered, setSidebarHovered] = useState(false);

    return (
        <div className="flex">
            <Sidebar
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
                hovered={sidebarHovered}
                setHovered={setSidebarHovered}
            />
            <div
                className="transition-all duration-300 ease-in-out flex-1"
                style={{ marginLeft: sidebarOpen || sidebarHovered ? 256 : 64 }}
            >
                {children}
            </div>
        </div>
    );
}
