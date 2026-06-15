"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Bottom navigation bar (mobile) — แสดงทุกหน้า
const ITEMS = [
  { href: "/", label: "หน้าหลัก", icon: HomeIcon },
  { href: "/topup", label: "เติมเกม", icon: TopupIcon },
  { href: "/cards", label: "บัตรเติมเกม", icon: CardIcon },
  { href: "/history", label: "ประวัติ", icon: HistoryIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 px-6 pointer-events-none">
      <nav
        className="mx-auto max-w-md overflow-hidden rounded-[28px] bg-white/90 shadow-[0_10px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur-xl pointer-events-auto"
        aria-label="bottom navigation"
      >
        <ul className="flex items-stretch justify-around p-1.5">
          {ITEMS.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <li key={href} className="flex-1">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative flex flex-col items-center justify-center gap-1 py-2 transition-all duration-300",
                    active
                      ? "text-primary"
                      : "text-zinc-400 hover:text-zinc-600",
                  ].join(" ")}
                >
                  {/* Active Background Pill */}
                  {active && (
                    <div className="absolute inset-x-1.5 inset-y-1 rounded-[20px] bg-primary/10 -z-10" />
                  )}
                  
                  <div className={["transition-all duration-300", active ? "scale-110 -translate-y-0.5" : ""].join(" ")}>
                    <Icon active={active} />
                  </div>
                  
                  <span className={[
                    "text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-300",
                    active ? "text-primary opacity-100" : "text-zinc-400 opacity-80"
                  ].join(" ")}>
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#cd1717" : "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}

// เปลี่ยนเป็นรูป Joystick เรียบร้อย
function TopupIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#cd1717" : "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* ตัวจอยสติ๊กหลัก */}
      <rect x="2" y="12" width="20" height="8" rx="2" />
      {/* ปุ่มกดทิศทาง D-pad ฝั่งซ้าย */}
      <path d="M6 14v4" />
      <path d="M4 16h4" />
      {/* แกนโยน/อนาล็อกตรงกลางด้านบน */}
      <path d="M12 12V6" />
      <circle cx="12" cy="5" r="2" fill={active ? "#cd1717" : "currentColor"} />
      {/* ปุ่มกด Action ฝั่งขวา */}
      <circle cx="16" cy="16" r="1" fill={active ? "#cd1717" : "currentColor"} />
      <circle cx="19" cy="15" r="1" fill={active ? "#cd1717" : "currentColor"} />
    </svg>
  );
}

function CardIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#cd1717" : "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h4" />
    </svg>
  );
}

function HistoryIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={active ? "#cd1717" : "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}