"use client";

import { useEffect, useState } from "react";

function getClockParts(timeZone: string) {
  const now = new Date();
  const time = now.toLocaleTimeString("en-IN", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const day = now.toLocaleDateString("en-IN", {
    timeZone,
    weekday: "long",
  });
  const zone = timeZone.replaceAll("_", " ");

  return { time, day, zone };
}

function getClockState(visitorTimeZone: string) {
  return {
    visitor: getClockParts(visitorTimeZone),
    team: getClockParts("Asia/Kolkata"),
  };
}

export function ISTClock() {
  const [clock, setClock] = useState(() => getClockState("Asia/Kolkata"));

  useEffect(() => {
    const visitorTimeZone =
      Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";

    const updateClock = () => {
      setClock(getClockState(visitorTimeZone));
    };

    updateClock();

    const interval = setInterval(() => {
      updateClock();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-card panel-lime">
      <p className="card-label text-on-dark-muted">Current time by location</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[18px] border border-border bg-[rgba(0,0,0,0.12)] p-4">
          <p className="card-label text-on-dark-muted">Your local time</p>
          <div className="mt-3 font-display text-[28px] leading-[1.08] text-on-dark">
            <span suppressHydrationWarning>{clock.visitor.time}</span>
          </div>
          <p className="mt-2 text-[14px] font-semibold text-on-dark-muted">
            {clock.visitor.day}
          </p>
          <p className="preserve-case mt-2 text-[13px] text-on-dark-muted">
            {clock.visitor.zone}
          </p>
        </div>

        <div className="rounded-[18px] border border-accent-border bg-accent-dim p-4">
          <p className="card-label text-on-dark-muted">LaunchRoom time</p>
          <div className="mt-3 font-display text-[28px] leading-[1.08] text-on-dark">
            <span suppressHydrationWarning>{clock.team.time}</span>
          </div>
          <p className="mt-2 text-[14px] font-semibold text-on-dark-muted">
            {clock.team.day}
          </p>
          <p className="preserve-case mt-2 text-[13px] text-on-dark-muted">
            {clock.team.zone}
          </p>
        </div>
      </div>
    </div>
  );
}
