import { Device, deviceEmpty } from "./interfaces";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const devicesDirectory = join(process.cwd(), "resources", "devices");

export function getDeviceSlugs() {
  return fs.readdirSync(devicesDirectory);
}

export function getDeviceBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(devicesDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) return deviceEmpty;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Device;
}

export function getAllDevices(): { count: number, data: Device[]} {
  const slugs = getDeviceSlugs();
  const devices = slugs
    .map((slug) => getDeviceBySlug(slug))
    .sort((device1, device2) => (device1.name < device2.name ? -1 : 1));
  return {
    count: devices.length,
    data: devices
  }
}