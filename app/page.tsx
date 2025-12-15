import Button from "@/components/Button";
import SectionDivider from "@/components/SectionDivider";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mt-12 flex justify-center">
        <Image src="/logo.svg" alt="" width={118} height={28} />
      </div>

      <div className="mt-16 mb-8 flex flex-wrap gap-y-12">
        <div className="overflow-hidden">
          <div className="flex justify-center gap-[4.53vw]">
            <div className="relative w-[55.47vw] h-[42.67vw] shrink-0">
              <Image
                src="/desktop/image-hero-left.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[55.47vw] h-[42.67vw] shrink-0">
              <Image
                src="/desktop/image-hero-right.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full mx-8 flex flex-col gap-6">
          <h1 className="text-preset-1 flex flex-col text-center">
            <span>Group Chat</span>
            <span>for Everyone</span>
          </h1>
          <p className="text-preset-4 text-center px-3">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <Button variant="cyan" version="v1.3">
              Download
            </Button>
            <Button variant="purple">What is it?</Button>
          </div>
        </div>
      </div>

      <div className="pt-8 mb-16">
        <SectionDivider number="01" />

        <div className="mt-16 mx-8 flex flex-col gap-16">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/desktop/image-woman-in-videocall.jpg"
              alt=""
              width={164}
              height={156}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/desktop/image-women-videochatting.jpg"
              alt=""
              width={164}
              height={156}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/desktop/image-men-in-meeting.jpg"
              alt=""
              width={164}
              height={156}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/desktop/image-man-texting.jpg"
              alt=""
              width={164}
              height={156}
              className="rounded-lg w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-6 text-center">
            <h3 className="text-preset-3 text-cyan-600">
              BUILT FOR MODERN USE
            </h3>
            <h2 className="text-preset-2 text-slate-900">
              Smarter meetings, all in one place
            </h2>
            <p className="text-preset-4 text-slate-600">
              Send messages, share files, show your screen, and record your
              meetings — all in one workspace. Control who can join with
              invite-only team access, data encryption, and data export.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
