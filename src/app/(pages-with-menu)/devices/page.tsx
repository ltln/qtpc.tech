import Window from "@/components/Window";
import { getAllDevices } from "@/lib/devices";
import Link from "next/link";

export default function DeviceList() {
    const allDevices = getAllDevices();

    return (
        <Window title={"Devices List"}>
            <div className="min-w-full">
                <div className="flex items-center justify-between h-12 px-6 py-2 text-xl font-chicago border-b-4 border-b-black">
                    <span>{allDevices.count} devices</span>
                    <span>unlimited</span>
                </div>
                <div className="flex items-center flex-wrap px-8 py-4 gap-12 font-chicago">
                {allDevices.data.map((n, i) => {
                    return (
                    <Link key={i} href={`/devices/${n.slug}`} legacyBehavior>
                    <div key={i} className="flex flex-col gap-2 items-center justify-start h-28 w-32 group cursor-pointer">
                        <img alt="" src={n.image} className="h-12" />
                        <span className="text-center bg-white group-hover:invert">{n.name}</span>
                    </div>
                    </Link>
                    )
                })}
                </div>
            </div>
        </Window>
    )
}