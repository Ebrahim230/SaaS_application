"use client";

import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { redirect } from "next/navigation";

export default function NavBar() {
    const [search, setSearch] = useState("");

    return (
        <nav className="w-full flex items-center justify-between p-4 bg-[#2C2D33] shadow-md">
            <div className="relative flex-1 max-w-3/5">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="pl-10 w-full border-gray-500 bg-[#2b2b36]"
                />
            </div>
            <div className="flex items-center gap-4 ml-4 max-w-2/5">
                <Bell className="w-6 h-6 cursor-pointer text-gray-600 hover:bg-[#A9DFD8] hover:rounded-full hover:p-0.5" />
                <Avatar className="w-10 h-10 cursor-pointer">
                    <AvatarImage src="/profile.avif" alt="Profile" onClick={() => { redirect('/profile') }} />
                    <AvatarFallback className="text-[#87888C]" onClick={() => { redirect('/profile') }}>EA</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    );
}