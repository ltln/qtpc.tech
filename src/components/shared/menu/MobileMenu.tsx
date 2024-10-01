'use client'

import Image from "next/image";
import Logo from '@/assets/qtpc.jpg'
import social from '../../../../resources/social.json'
import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu({ children }: { children: ReactElement }) {
    const [state, setState] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setState(false);
    }, [pathname])

    const handleShutdown = () => {
        const container = document.getElementById('qtpc');
        if (container) {
            container.classList.add('duration-500');
            container.classList.add('scale-0');
        }

        setTimeout(() => {
            window.location.reload();
        }, 5000)
    }

    return (
        <div className="lg:hidden">
            <div onClick={() => setState(!state)}>
                {children}
            </div>
            {state && (
            <div className="absolute z-50 left-0 top-16 w-full font-chicago text-lg text-center">
                <div className="px-8 py-3 border-b-2 bg-white border-b-black group hover:invert">
                    <div className="flex items-center group-hover:mb-3 justify-center gap-2">
                        <Image src={Logo} height="28" alt='Logo' className='rounded-md group-hover:invert' />
                        QuanTrieuPCYT
                    </div>
                    <div className="hidden group-hover:block">
                        <Link href='/about' className="block px-8 py-3 border-b-2 bg-white border-b-black group-hover:invert hover:bg-black hover:text-white">
                            About Me
                        </Link>
                        <Link href='/logout' className="block px-8 py-3 border-b-2 bg-white border-b-black group-hover:invert hover:bg-black hover:text-white">
                            Logout
                        </Link>
                        <div className="px-8 py-3 border-b-2 bg-white border-b-black group-hover:invert hover:bg-black hover:text-white" onClick={() => window.location.reload()}>
                            Restart
                        </div>
                        <div className="px-8 py-3 border-b-2 bg-white border-b-black group-hover:invert hover:bg-black hover:text-white" onClick={handleShutdown}>
                            Shutdown
                        </div>
                    </div>
                </div>
                <Link href="/devices" className="block px-8 py-3 border-b-2 bg-white border-b-black hover:invert">
                    Devices
                </Link>
                <Link href="/posts" className="block px-8 py-3 border-b-2 bg-white border-b-black hover:invert">
                    Posts
                </Link>
                <Link href="https://status.qtpc.tech" target="_blank" className="block px-8 py-3 border-b-2 bg-white border-b-black hover:invert">
                    Status
                </Link>
                <div className="px-8 py-3 border-b-2 bg-white border-b-black group hover:invert">
                    <div className="flex items-center group-hover:mb-3 justify-center gap-2">
                        Social
                    </div>
                    <div className="hidden group-hover:block">
                    {social.map((n, i) => {
                        return (
                        <Link href={n.url} key={i} target="_blank" className="block px-8 py-3 border-b-2 bg-white border-b-black group-hover:invert hover:bg-black hover:text-white">
                            {n.name}
                        </Link>
                        )
                    })}        
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}