export default function SectionDivider({ number }: { number: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-px h-20 bg-slate-300" />
      <div className="w-14 h-14 rounded-full border border-slate-300 bg-white flex items-center justify-center">
        <span className="text-slate-600 font-black text-preset-5">
          {number}
        </span>
      </div>
    </div>
  );
}
