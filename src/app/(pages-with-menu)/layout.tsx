import { MenuBar } from '@/components/shared/menu'
import { DesktopFiles } from '@/components/shared/desktop'

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='fixed w-screen h-screen bg-zinc-800 p-4'>
            <div id='qtpc' className='relative w-full h-full pb-16 rounded-3xl'>
                <MenuBar />
                <div
                    className='relative flex items-center justify-center w-full h-full rounded-b-3xl background-wrap px-4'
                >
                    {children}
                    <DesktopFiles />
                </div>
            </div>
        </div>
    )
}
