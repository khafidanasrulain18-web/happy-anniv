"use client";

import { useEffect, useState } from "react";

// Ganti tanggal lahir di sini kalau perlu.
const BIRTH_DATE = new Date(2022, 5, 12, 0, 0, 0);

function getCalendarAge(now: Date) {
  let years = now.getFullYear() - BIRTH_DATE.getFullYear();
  let months = now.getMonth() - BIRTH_DATE.getMonth();
  let days = now.getDate() - BIRTH_DATE.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days };
}

export default function LiveAge() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!now) {
    // Placeholder statis sebelum hydration, biar tidak ada layout shift.
    return (
      <div className="mt-8 text-center" aria-hidden="true">
        <div className="h-6 w-64 mx-auto rounded-full bg-mauve/5" />
      </div>
    );
  }

  const { years, months, days } = getCalendarAge(now);
  const totalSeconds = Math.max(
    0,
    Math.floor((now.getTime() - BIRTH_DATE.getTime()) / 1000)
  );

  return (
    <div className="mt-8 text-center">
      <p className="font-body text-sm md:text-base text-mauve/70">
        sudah{" "}
        <span className="font-semibold text-rose-deep">{years} tahun</span>,{" "}
        <span className="font-semibold text-rose-deep">{months} bulan</span>,{" "}
        <span className="font-semibold text-rose-deep">{days} hari</span> hubungan kita berjalan
      </p>
      <p className="mt-3 font-body text-[11px] uppercase tracking-[0.25em] text-mauve/40">
        dan detik ini juga terus bertambah
      </p>
      <p className="mt-1 font-display italic text-2xl md:text-3xl text-mauve tabular-nums">
        {totalSeconds.toLocaleString("id-ID")} detik
      </p>
    </div>
  );
}
