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
            {/* 
            To do: proper metadata
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/favicon/safari-pinned-tab.svg"
                    color="#000000"
                />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta
                    name="msapplication-config"
                    content="/favicon/browserconfig.xml"
                />
                <meta name="theme-color" content="#000" />
                <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            </head> */}
            <body className={`${chicagoFLF.variable} antialiased`}>{children}</body>
        </html>
    )
}
