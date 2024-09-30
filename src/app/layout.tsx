import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import MenuBar from '@/components/MenuBar'
import { DesktopFiles } from '@/components/shared/desktop'

const chicagoFLF = localFont({
    src: '../assets/fonts/ChicagoFLF.ttf',
    variable: '--font-chicago',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'QuanTrieuPCYT',
    description: '17-year old Vietnamese who likes tinkering with tech things.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${chicagoFLF.variable} antialiased`}>
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
            </body>
        </html>
    )
}
