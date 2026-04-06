"use client";

import { useEffect, useState } from "react";

function getClockState() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const day = now.toLocaleDateString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
  });

  return { time, day };
}

export function ISTClock() {
  const [clock, setClock] = useState(getClockState);

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(getClockState());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="panel-lime p-6">
      <p className="card-label text-on-dark-muted">Current time for our team</p>
      <div className="mt-4 font-display text-[34px] leading-[1.08] text-on-dark">
        <span suppressHydrationWarning>{clock.time}</span>
      </div>
      <p className="mt-3 text-[15px] font-semibold text-on-dark-muted">{clock.day}</p>
    </div>
  );
}
