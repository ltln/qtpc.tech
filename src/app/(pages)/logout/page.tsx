'use client'

import HappyMac from "@/assets/happy_mac.webp"
import { cx } from "class-variance-authority";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react";
import useSound from "use-sound";

export default function Logout() {
    const [state, setState] = useState<boolean>(false);
    const [play] = useSound('/startup_sound.mp3', { volume: 0.1 });
    const { replace } = useRouter();

    const handleLogin = () => {
        setTimeout(() => {
            setState(true);
        }, 300)
        setTimeout(() => {
            play();
        }, 600)
        setTimeout(() => {
            replace("/");
        }, 2600)
    }
    
    return (
        <div className={cx('fixed w-screen h-screen bg-zinc-900 p-4', state ? "cursor-progress" : "")}>
            <div className='relative w-full h-full rounded-3xl'>
                <div
                    className='relative flex items-center justify-center w-full h-full rounded-3xl background-wrap'
                >
                {state ? (
                    <div className="absolute bg-white border-double border-8 border-black w-1/2 max-lg:w-full max-h-64 top-1/4 h-full font-chicago text-center pt-16">
                        <span className="text-lg">Welcome to QuanTrieuPCYT&#39;s website.</span>
                    </div>
                ) : (
                    <Image alt="" src={HappyMac} className="cursor-pointer" onClick={handleLogin} />
                )}     
                </div>
            </div>
        </div>
    )
}