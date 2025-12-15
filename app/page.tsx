import Button from "@/components/Button";
import SectionDivider from "@/components/SectionDivider";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Logo */}
      <div className="mt-12 xl:mt-20 flex justify-center">
        <Image src="/logo.svg" alt="" width={118} height={28} />
      </div>

      {/* Hero Section */}
      <div className="mt-16 mb-8 xl:mb-24 flex flex-wrap gap-y-12 md:gap-y-18 xl:flex-nowrap xl:justify-center xl:items-center xl:gap-8 xl:max-w-[1120px] xl:mx-auto">
        {/* Mobile: Two overflowing images */}
        <div className="overflow-hidden md:hidden">
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

        {/* Tablet: Single overflowing image */}
        <div className="hidden md:block xl:hidden overflow-hidden">
          <div className="flex justify-center">
            <div className="relative w-[820px] h-[303px] shrink-0">
              <Image
                src="/tablet/image-hero.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop: Left images */}
        <div className="hidden xl:block relative w-[394px] h-[303px] shrink-0">
          <Image
            src="/desktop/image-hero-left.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Text content */}
        <div className="w-full mx-8 md:mx-16 xl:mx-0 xl:w-auto flex flex-col gap-6 xl:gap-8 items-center">
          <h1 className="text-preset-1 flex flex-col text-center">
            <span>Group Chat</span>
            <span>for Everyone</span>
          </h1>
          <p className="text-preset-4 text-center px-3 md:px-0 md:max-w-md">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Button variant="cyan" version="v1.3">
              Download
            </Button>
            <Button variant="purple">What is it?</Button>
          </div>
        </div>

        {/* Desktop: Right images */}
        <div className="hidden xl:block relative w-[394px] h-[303px] shrink-0">
          <Image
            src="/desktop/image-hero-right.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Section 01 */}
      <div className="pt-8 mb-[172px] xl:mb-[184px]">
        <SectionDivider number="01" />

        <div className="mt-16 xl:mt-20 mx-8 md:mx-16 xl:mx-auto xl:max-w-[1120px] flex flex-col gap-16 xl:gap-20">
          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
            <Image
              src="/desktop/image-woman-in-videocall.jpg"
              alt=""
              width={255}
              height={242}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/desktop/image-women-videochatting.jpg"
              alt=""
              width={255}
              height={242}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/desktop/image-men-in-meeting.jpg"
              alt=""
              width={255}
              height={242}
              className="rounded-lg w-full h-auto"
            />
            <Image
              src="/desktop/image-man-texting.jpg"
              alt=""
              width={255}
              height={242}
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6 xl:gap-4 text-center md:max-w-[504px] md:mx-auto xl:max-w-[540px]">
            <h3 className="text-preset-3 text-cyan-600">
              BUILT FOR MODERN USE
            </h3>
            <h2 className="text-preset-2 text-slate-900">
              Smarter meetings, all in
              <span className="md:block xl:inline">one place</span>
            </h2>
            <p className="text-preset-4 text-slate-600">
              Send messages, share files, show your screen, and record your
              meetings — all in one workspace. Control who can join with
              invite-only team access, data encryption, and data export.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative">
        <div className="absolute -top-[108px] left-1/2 -translate-x-1/2 z-10">
          <SectionDivider number="02" />
        </div>

        <div className="relative h-[374px] md:h-auto xl:h-[308px] overflow-hidden">
          <Image
            src="/mobile/image-footer.jpg"
            alt=""
            fill
            className="object-cover object-center md:hidden"
          />
          <Image
            src="/tablet/image-footer.jpg"
            alt=""
            fill
            className="object-cover object-center hidden md:block xl:hidden"
          />
          <Image
            src="/desktop/image-footer.jpg"
            alt=""
            fill
            className="object-cover object-center hidden xl:block"
          />

          {/* Cyan overlay */}
          <div className="absolute inset-0 bg-cyan-600 opacity-90" />

          {/* Content */}
          <div className="relative h-full flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-6 xl:gap-8 px-8 md:px-0 md:py-16 xl:py-0 xl:max-w-[1120px] xl:mx-auto text-center xl:text-left text-white md:max-w-[504px] md:mx-auto">
            <div className="flex flex-col gap-6 xl:max-w-[350px]">
              <h2 className="text-preset-2">Experience more together</h2>
              <p className="text-preset-4">
                Stay connected with reliable HD meetings and unlimited
                one-on-one and group video sessions.
              </p>
            </div>
            <Button variant="purple" version="v1.3">
              Download
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
