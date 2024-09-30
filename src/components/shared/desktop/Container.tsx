'use client'

import HardDisk from "@/assets/hard_disk.svg"
import File from "@/assets/file.svg"
import Folder from "@/assets/folder.svg"
import DesktopFile from "./Files"

export default function DesktopFiles() {
    return (
        <div className="absolute h-full right-0 font-chicago flex flex-col gap-12 px-8 py-12">
            <DesktopFile name="QTPC HD" img={HardDisk} route="/home" />
            <DesktopFile name="About QTPC" img={File} route="/about" />
            <DesktopFile name="Devices" img={Folder} route="/devices" />
            <DesktopFile name="Posts" img={Folder} route="/posts" />
        </div>
    )
}