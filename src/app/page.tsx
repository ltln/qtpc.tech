import MenuBar from '@/components/MenuBar'
import Window from '@/components/Window'

export default function Home() {
    return (
        <div className='fixed w-screen h-screen bg-zinc-900 p-4'>
            <div className='relative w-full h-full pb-16 rounded-3xl'>
                <MenuBar />
                <div id='content' className='relative w-full h-full rounded-b-3xl background-wrap'>
                    <Window />
                </div>
            </div>
        </div>
    )
}
