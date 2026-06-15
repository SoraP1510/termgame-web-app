import Link from "next/link";
import Image from "next/image";

export default function TopBar() {
  return (
    // เปลี่ยนพื้นหลังเป็น bg-[#F14B4B] ตรงนี้ได้เลยครับ
    <header className="w-full bg-[#F14B4B] shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5">
        
        {/* ฝั่งซ้าย: โลโก้ร้าน */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="TermGame Logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover ring-2 ring-black/10"
          />
          {/* เปลี่ยนสีตัวอักษรเป็นสีดำ text-zinc-900 */}
          <span className="text-base font-bold text-zinc-900 hidden sm:block">
            InBlack Gaming
          </span>
        </Link>

        {/* ตรงกลาง: ข้อความ 2 บรรทัด ตัวอักษรสีดำ */}
        <div className="flex-1 text-center px-1">
          <p className="text-[15px] font-bold text-zinc-900 leading-tight">
            Inblackm Termgame - ถูกทะลุมิติ
          </p>
          <p className="text-[13px] font-semibold text-zinc-800 leading-tight">
            รับเติมเกม บริการตลอด 24 ชม.
          </p>
        </div>

        {/* ฝั่งขวา: ปุ่มเข้าสู่ระบบ */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/login"
            className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
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