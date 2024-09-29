"use client";

import Logo from "@/assets/qtpc.jpg";
import social from "@/lib/social.json";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useState } from "react";
import Link from "next/link";

const devices = [
    "Desktop", "iPhone 14 Plus", "MacBook Pro", "Apple Watch Series 9", "Thicc SMP", "ThiccSkyblocc", "MySQL", "Raspberry Pi 4"
]

export default function MenuBar() {
    const [time, setTime] = useState<string>("");
    setInterval(() => {
        var currentTime = new Date();
        setTime(currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
    }, 1000)
    return (
        <div className="flex items-center justify-between w-full bg-white h-16 px-12 border-b-4 border-b-black font-chicago rounded-t-3xl">
            <div className="flex items-center gap-12">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Image src={Logo} height="36" alt="Logo" className="rounded-md" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="font-chicago p-0 rounded-none mt-2 border-4 border-black drop-shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
                        <DropdownMenuItem className="text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer">About Me</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer">Logout</DropdownMenuItem>
                        <DropdownMenuItem className="text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer">Restart</DropdownMenuItem>
                        <DropdownMenuItem className="text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer">Shutdown</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <span className="text-3xl">Devices</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="font-chicago p-0 rounded-none mt-2 border-4 border-black drop-shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
                    {devices.map((n, i) => {
                        return <DropdownMenuItem key={i} className="text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer">{n}</DropdownMenuItem>
                    })}
                    </DropdownMenuContent>
                </DropdownMenu>
                <span className="text-3xl">Posts</span>
                <span className="text-3xl">Status</span>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <span className="text-3xl">Social</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="font-chicago p-0 rounded-none mt-2 border-4 border-black drop-shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
                    {social.map((data, i) => {
                        return (
                        <DropdownMenuItem key={i} className="text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer">
                            <Link href={data.url} target="_blank">{data.name}</Link>
                        </DropdownMenuItem>
                        )
                    })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex items-center">
                <span className="text-2xl">{time}</span>
            </div>
        </div>
    )
}