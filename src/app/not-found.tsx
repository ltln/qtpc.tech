import SadMac from "@/assets/sad_mac.png";
import Image from "next/image";

export default function NotFound() {;
    return (
        <div className="absolute w-screen h-screen z-10 bg-black top-0 -mt-20 flex items-center justify-center">
            <Image alt="" src={SadMac} />
        </div>
    )
  }