import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mt-12 flex justify-center">
        <Image src="/logo.svg" alt="" width={118} height={28} />
      </div>
      <div className="mx-8 mt-16 mb-8 grid grid-cols-2 gap-y-12 gap-x-[17px]">
        <Image
          src="/desktop/image-hero-left.png"
          alt=""
          width={208}
          height={160}
        />
        <Image
          src="/desktop/image-hero-right.png"
          alt=""
          width={208}
          height={160}
        />
        <div className="col-span-2 flex flex-col gap-6">
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
