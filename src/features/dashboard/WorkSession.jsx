import { useEffect, useRef, useState } from "react";

export default function WorkSession() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700 tracking-wide uppercase">
          Focus Session
        </h3>

        <span
          className={`text-xs px-2 py-1 rounded-full font-medium
            ${isRunning
              ? "bg-emerald-100 text-emerald-700"
              : seconds > 0
              ? "bg-amber-100 text-amber-700"
              : "bg-slate-100 text-slate-500"}
          `}
        >
          {isRunning ? "Running" : seconds > 0 ? "Paused" : "Idle"}
        </span>
      </div>

      {/* Timer */}
      <div className="flex flex-col items-center justify-center flex-1">
        <p className="text-4xl font-mono font-semibold text-slate-900 tracking-tight">
          {formatTime(seconds)}
        </p>
        <p className="text-xs text-slate-500 mt-2">
          Stay focused. One session at a time.
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <button
          onClick={() => setIsRunning((prev) => !prev)}
          className={`flex-1 py-2 rounded-xl font-medium transition
            ${isRunning
              ? "bg-slate-900 text-white hover:bg-slate-800"
              : "bg-blue-600 text-white hover:bg-blue-500"}
          `}
        >
          {isRunning ? "Pause" : seconds === 0 ? "Start Session" : "Resume"}
        </button>

        {seconds > 0 && !isRunning && (
          <button
            onClick={() => setSeconds(0)}
            className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
