import { useEffect, useState } from "react";
import { FiBell, FiClock } from "react-icons/fi";

const QUOTES = [
  "Focus on progress, not perfection.",
  "Small steps every day lead to big results.",
  "Do one thing well today.",
  "Consistency beats motivation.",
  "Your future self will thank you.",
  "Make today count.",
  "Work with intention, not pressure.",
  "Deep work creates meaningful results.",
  "Start where you are. Improve as you go.",
  "Clarity comes from action.",
  "Build momentum, one task at a time.",
  "Calm focus is a superpower.",
  "Discipline creates freedom.",
  "Your effort matters.",
  "Less noise. More focus.",
  "Progress happens quietly.",
  "Done is better than perfect.",
  "Energy flows where attention goes.",
  "Focus fuels excellence.",
  "Work smart. Stay steady.",
  "Intentional work wins.",
  "You are capable of more than you think.",
  "Great things take focused time.",
  "One task. Full attention.",
  "Create before you consume.",
  "Momentum is built, not found.",
  "Stay present. Stay sharp.",
  "Clarity over chaos.",
  "Every minute compounds.",
  "Focus is your advantage.",
  "Show up, even on slow days.",
  "Progress loves patience.",
  "Your consistency defines you.",
  "Build quietly. Deliver loudly.",
  "Work with purpose.",
  "Attention is power.",
  "Focus creates confidence.",
  "Make it meaningful.",
  "Steady effort wins.",
  "Finish strong."
];

export default function DashboardHeader() {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const updateHeader = () => {
      const now = new Date();

      // Time (Kolkata)
      const formattedTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);

      setTime(formattedTime);

      // Hour for greeting
      const hour = Number(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          hour12: false,
        }).format(now)
      );

      if (hour >= 5 && hour < 12) {
        setGreeting("Good morning, have a productive day");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good afternoon, keep going strong");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good evening, finish strong");
      } else {
        setGreeting("Good night, time to slow down");
      }

      // Random quote
      const randomQuote =
        QUOTES[Math.floor(Math.random() * QUOTES.length)];
      setQuote(randomQuote);
    };

    updateHeader();
    const interval = setInterval(updateHeader, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between mb-6">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Dashboard
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {greeting}
        </p>
      </div>

      <div className="hidden md:block flex-1 text-center px-6">
        <p className="text-xl italic text-slate-500">
          “{quote}”
        </p>
      </div>

      <div className="flex items-center gap-6 text-slate-600">
        <div className="flex items-center gap-2 text-sm">
          <FiClock className="text-slate-400" />
          <span>{time}</span>
        </div>

        <button className="relative">
          <FiBell className="text-xl text-slate-500 hover:text-slate-700 transition" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>
      </div>
    </div>
  );
}
