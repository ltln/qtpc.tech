import MenuBar from '@/components/MenuBar'
import { DesktopFiles } from '@/components/shared/desktop'

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className='fixed w-screen h-screen bg-zinc-900 p-4'>
            <div className='relative w-full h-full pb-16 rounded-3xl'>
                <MenuBar />
                <div
                    id='content'
                    className='relative flex items-center justify-center w-full h-full rounded-b-3xl background-wrap'
                >
                    {children}
                    <DesktopFiles />
                </div>
            </div>
        </div>
    )
}
