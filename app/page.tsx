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
            {/* To calculate vw units, I did image width in figma at 375px screen size, 
            which is 208. Then 208 / 375 = 55.47%. I used the same logic for the height. */}
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
          <div className="flex flex-col gap-4">
            <button>download</button>
            <button>what is it?</button>
          </div>
        </div>
      </div>
    </>
  );
}
