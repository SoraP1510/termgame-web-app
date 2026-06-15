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
    <nav
      className="sticky bottom-0 z-40 mt-auto w-full border-t border-black/5 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.04)]"
      aria-label="bottom navigation"
    >
      <ul className="mx-auto flex max-w-5xl items-stretch justify-around px-2 py-1.5">
        {ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={[
                  "flex flex-col items-center justify-center gap-0.5 rounded-lg py-1.5 text-[11px] font-medium transition",
                  active
                    ? "text-primary"
                    : "text-zinc-500 hover:text-primary",
                ].join(" ")}
              >
                <Icon active={active} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
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