import Link from "next/link";
import Image from "next/image";

// แถบด้านบนสี #ff8c8c พร้อมโลโก้ + ปุ่มเมนู (หน้าหลัก/ประวัติ/เติมเกม/บัตรเติมเกม)
export default function TopBar() {
  return (
    <header className="w-full bg-bar shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="TermGame Logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover ring-2 ring-white/60"
          />
          <span className="text-base font-semibold text-white drop-shadow-sm">
            TermGame
          </span>
        </Link>
        <nav className="hidden gap-1 sm:flex">
          <TopLink href="/">หน้าหลัก</TopLink>
          <TopLink href="/topup">เติมเกม</TopLink>
          <TopLink href="/cards">บัตรเติมเกม</TopLink>
          <TopLink href="/history">ประวัติ</TopLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary hover:bg-white"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </header>
  );
}

function TopLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-1 text-sm font-medium text-white/95 transition hover:bg-white/15"
    >
      {children}
    </Link>
  );
}
