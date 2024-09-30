import Window from "@/components/Window";

import File from "@/assets/file.svg"
import Folder from "@/assets/folder.svg"
import { DesktopFile } from "@/components/shared/desktop";

export default function DeviceList() {
    return (
        <Window title={"QTPC HD"} size={{ height: 700, width: 1200 }}>
            <div className="min-w-full">
                <div className="flex items-center justify-between h-12 px-6 py-2 text-xl font-chicago border-b-4 border-b-black">
                    <span>4 items</span>
                    <span>unlimited</span>
                </div>
                <div className="flex items-center justify-start flex-wrap px-8 py-4 gap-12 font-chicago">
                    <DesktopFile name="About QTPC" img={File} route="/about" />
                    <DesktopFile name="Devices" img={Folder} route="/devices" />
                    <DesktopFile name="Posts" img={Folder} route="/posts" />
                </div>
            </div>
        </Window>
    )
}