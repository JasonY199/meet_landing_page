import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-12 flex justify-center">
      <Image src="/logo.svg" alt="" width={118} height={28} />
    </div>
  );
}
