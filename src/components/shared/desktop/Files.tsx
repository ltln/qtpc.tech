'use client'

import { cx } from "class-variance-authority";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DesktopFile({ name, img, route }: { name: string, img: any, route: string }) {
    const [state, setState] = useState<boolean>(false);
    const { push } = useRouter();

    const handleClick = () => {
        if (state) {
            setState(false);
            push(route);
        } else {
            setState(true);
        }
    }

    setInterval(function() {
        setState(false);
    }, 5000)

    return (
        <div className={cx('flex flex-col gap-2 justify-center items-center cursor-pointer', state ? 'invert' : '')} onClick={handleClick} onDoubleClick={() => push(route)}>
            <Image alt="" src={img} />
            <span className="bg-white text-lg px-3">{name}</span>
        </div>
    )
}