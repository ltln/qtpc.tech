'use client'

import Logo from '@/assets/qtpc.jpg'
import social from '../../../../resources/social.json'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../../ui/dropdown-menu'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import MobileMenu from './MobileMenu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export default function MenuBar() {
    const { push, replace } = useRouter()

    const [time, setTime] = useState<string>('')
    const [date, setDate] = useState<string>('')
    const [mode, setMode] = useState<boolean>(false)

    setInterval(() => {
        const currentTime = new Date()
        setTime(
            currentTime.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            }),
        )
        setDate(
            currentTime.toLocaleString('en-US', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
            }),
        )
    }, 1000)

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
        <div className="bg-zinc-800 z-50">
            <div className='flex items-center justify-between w-full bg-white h-16 px-12 border-b-4 border-b-black font-chicago rounded-t-3xl'>
                <MobileMenu>
                    <HamburgerMenuIcon className="size-8 lg:hidden" />
                </MobileMenu>
                <div className='flex items-center gap-12 max-lg:hidden'>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Image src={Logo} height='36' alt='Logo' className='rounded-md' />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align='start'
                            className='font-chicago p-0 rounded-none mt-2 border-4 border-black drop-shadow-[8px_8px_0px_rgba(0,0,0,0.5)]'
                        >
                            <DropdownMenuItem
                                className='text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer'
                                onClick={() => push('/about')}
                            >
                                About Me
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className='text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer'
                                onClick={() => replace('/logout')}
                            >
                                Logout
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer' onClick={() => window.location.reload()}>
                                Restart
                            </DropdownMenuItem>
                            <DropdownMenuItem className='text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer' onClick={handleShutdown}>
                                Shutdown
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href='/devices' className='text-3xl'>
                        Devices
                    </Link>
                    <Link href='/posts' className='text-3xl'>
                        Posts
                    </Link>
                    <Link href='https://status.qtpc.tech' target='_blank' className='text-3xl'>
                        Status
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <span className='text-3xl'>Social</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align='start'
                            className='font-chicago p-0 rounded-none mt-2 border-4 border-black drop-shadow-[8px_8px_0px_rgba(0,0,0,0.5)]'
                        >
                            {social.map((data, i) => {
                                return (
                                    <DropdownMenuItem
                                        key={i}
                                        className='text-2xl px-4 py-2 rounded-none focus:bg-black hover:bg-black focus:text-white hover:text-white cursor-pointer'
                                    >
                                        <Link href={data.url} target='_blank'>
                                            {data.name}
                                        </Link>
                                    </DropdownMenuItem>
                                )
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className='flex items-center cursor-default' onClick={() => setMode(!mode)}>
                    {!mode ? (
                        <span className='text-2xl'>{time}</span>
                    ) : (
                        <span className='text-2xl'>{date}</span>
                    )}
                </div>
            </div>
        </div>
    )
}
