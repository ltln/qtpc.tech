// Should you use these paths, you will face the consequences
// /, /about, /home, /logout, /devices, /posts

const routes: Route[] = [
    {
        path: 'techjank',
        url: 'https://discord.gg/sJ9NQprExv'
    },
]

type Route = {
    path: string
    url?: string
    permanent?: boolean
    asset?: string
}

export { routes, type Route };