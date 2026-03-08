"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/80">
          Question {current} of {total}
        </span>
        <span className="text-xs font-bold text-white">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-white/25 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
