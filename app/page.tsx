
import Link from "next/link";
import TopBar from "@/app/components/TopBar";
import Banner from "@/app/components/Banner";
import PromotionCarousel from "@/app/components/PromotionCarousel";
import GameCard from "@/app/components/GameCard";
import GameListRow from "@/app/components/GameListRow";
import { GAMES } from "@/app/lib/mockData";

export default function HomePage() {
// เกมที่จะโชว์ใน grid ของหน้าหลัก — ใช้ 6 อันแรก
const featured = GAMES.slice(0, 6);
// ส่วน "more" — เลื่อนลงมาเจอ
const more = GAMES;

return (
  <>
    <TopBar />
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-6">
      {/* Main Carousel - Promotion images sliding automatically */}
      {/* Secondary Banner */}
      <section className="mt-6 sm:rounded-xl sm:overflow-hidden">
        <Banner />
      </section>


      {/* Game grid */}
      <section className="mt-8">
        <h2 className="mb-4 text-base font-semibold text-zinc-800">
          เกมยอดนิยม
        </h2>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {featured.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-base font-semibold text-zinc-800">
          โปรโมชันแนะนำ
        </h2>
        <div className="-mx-4 sm:mx-0 sm:rounded-xl sm:overflow-hidden">
          <PromotionCarousel />
        </div>
      </section>

      {/* More — list of games (Like home2.svg) */}
      <section className="mt-10">
        <h2 className="mb-4 text-base font-semibold text-zinc-800">
          เกมอื่นๆ อีกมากมาย
        </h2>
        <ul className="flex flex-col gap-2.5">
          {more.map((g) => (
            <li key={g.id}>
              <GameListRow game={g} />
            </li>
          ))}
        </ul>
      </section>

      {/* About Us section */}
      <section className="mt-16 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-zinc-800">เกี่ยวกับเรา</h2>
          <div className="mt-2 h-1 w-10 rounded-full bg-primary"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-zinc-600">
              <span className="font-bold text-primary">TermGame</span> คือผู้ให้บริการเติมเกมออนไลน์และจำหน่ายบัตรเติมเงินครบวงจร 
              เรามุ่งเน้นการให้บริการที่รวดเร็ว ปลอดภัย และราคาคุ้มค่าที่สุดสำหรับเกมเมอร์ทุกคน
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">เปิดให้บริการ</span>
                <span className="text-sm font-medium text-zinc-700">24 ชั่วโมง</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">ความปลอดภัย</span>
                <span className="text-sm font-medium text-zinc-700">มาตรฐานสากล</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-zinc-800">ช่องทางการติดต่อ</h3>
            <div className="flex flex-wrap gap-3">
              {['Facebook', 'Line Official', 'Instagram', 'Discord'].map((social) => (
                <span key={social} className="rounded-full bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600 ring-1 ring-black/5">
                  {social}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-zinc-400 italic">
              *หากพบปัญหาในการใช้งาน สามารถติดต่อแอดมินได้ตลอดเวลาผ่านช่องทางข้างต้น
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);
}

function CategoryLink({
href,
title,
desc,
color,
}: {
href: string;
title: string;
desc: string;
color: string;
}) {
return (
  <Link
    href={href}
    className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-black/5 transition hover:shadow-sm"
  >
    <div
      className={[
        "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white",
        color,
      ].join(" ")}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 3v18" />
        <path d="M17 7H9.5a3 3 0 0 0 0 6h5a3 3 0 0 1 0 6H6" />
      </svg>
    </div>
    <div className="min-w-0">
      <p className="truncate text-sm font-semibold text-zinc-800">{title}</p>
      <p className="truncate text-xs text-zinc-500">{desc}</p>
    </div>
  </Link>
);
}
