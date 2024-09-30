import Window from "@/components/Window";
import { getAllDevices, getDeviceBySlug } from "@/lib/devices";
import markdownToHtml from "@/lib/markdown";

export default async function Post({ params }: Params) {
    const device = getDeviceBySlug(params.slug);

    if (device.content == "") {
        return "";
    }

    const content = await markdownToHtml(device.content || "");

    return (
        <Window title={"Post Details"} size={{ height: 700, width: 1200 }}>
            <div
              className="px-6 py-4 min-w-full prose"
            >
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </Window>
    )
}

type Params = {
    params: {
      slug: string;
    };
};

export async function generateStaticParams() {
    const devices = getAllDevices();
  
    return devices.data.map((device) => ({
      slug: device.slug,
    }));
}