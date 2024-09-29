import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

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
            <body className={`${chicagoFLF.variable} antialiased`}>{children}</body>
        </html>
    )
}
