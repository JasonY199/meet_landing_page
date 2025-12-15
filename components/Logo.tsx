import Image from "next/image";

export default function Logo() {
  return (
    <div className="mt-12 xl:mt-20 flex justify-center">
      <Image src="/logo.svg" alt="" width={118} height={28} />
    </div>
  );
}
