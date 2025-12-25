import Image from "next/image";

export default function FeaturesSection() {
  return (
    <div className="mb-[172px] xl:mb-[184px]">
      <div className="mt-16 mx-8 md:mx-16 xl:mx-auto! xl:max-w-[1120px] flex flex-col gap-16 xl:gap-20">
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
        <div className="flex flex-col gap-6 xl:gap-8 text-center md:max-w-[530px] md:mx-auto xl:max-w-[540px]">
          <div className="flex flex-col gap-4 xl:max-w-[410px] xl:mx-auto">
            <h3 className="text-preset-3 text-cyan-600">
              BUILT FOR MODERN USE
            </h3>
            <h2 className="text-preset-2 text-slate-900">
              Smarter meetings, all in one place
            </h2>
          </div>
          <p className="text-preset-4 text-slate-600">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
    </div>
  );
}
