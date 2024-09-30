'use client'

import SadMac from '@/assets/sad_mac.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useSound from 'use-sound'

export default function NotFound() {
    const { replace } = useRouter()
    const [play] = useSound('/crash_sound.mp3', { volume: 0.1 })

    const handleClick = () => {
        play()
        setTimeout(() => {
            replace('/')
        }, 2000)
    }

    return (
        <div
            className='absolute w-screen h-screen z-10 bg-black top-0 flex flex-col gap-2 items-center justify-center'
            onClick={handleClick}
        >
            <Image alt='' src={SadMac} />
            <span className='text-gray-300 font-chicago'>Click to go home</span>
        </div>
    )
}
