import Image from "next/image";
import Button from "@/components/Button";

export default function Footer() {
  return (
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
  );
}
