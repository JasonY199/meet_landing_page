import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <div
      className="
        mt-16 mb-8 xl:mb-30 
        flex flex-wrap 
        gap-y-12 md:gap-y-18 xl:gap-x-32 xl:overflow-hidden
        xl:justify-center xl:items-center xl:flex-nowrap
        "
    >
      {/* Mobile: Two overflowing images */}
      <div className="md:hidden w-full overflow-hidden">
        <div className="flex justify-center gap-[4.53vw] min-[375px]:gap-[17px]">
          <div className="relative w-[55.47vw] h-[42.67vw] min-[375px]:w-52 min-[375px]:h-40 shrink-0">
            <Image
              src="/desktop/image-hero-left.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[55.47vw] h-[42.67vw] min-[375px]:w-52 min-[375px]:h-40 shrink-0">
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
      <div className="hidden md:flex xl:hidden! w-full justify-center">
        <div className="relative w-full max-w-[820px] h-[303px] shrink-0">
          <Image
            src="/tablet/image-hero.png"
            alt=""
            fill
            className="object-cover"
          />
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
      <div className="w-full xl:min-w-[445px] mx-8 md:mx-16 xl:mx-0! flex flex-col gap-6 xl:gap-8 items-center">
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
  );
}
