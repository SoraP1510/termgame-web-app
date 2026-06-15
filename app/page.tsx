
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
        <section className="-mx-4 mt-2 sm:mx-0 sm:mt-3 sm:rounded-xl sm:overflow-hidden">
          <PromotionCarousel />
        </section>

        {/* Category row - Scrollable on mobile if needed */}
        <section className="mt-4 flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          <div className="min-w-[160px] flex-1">
            <CategoryLink
              href="/topup"
              title="เติมเกม"
              desc="เติมเงินเข้าเกมออนไลน์"
              color="bg-primary"
            />
          </div>
          <div className="min-w-[160px] flex-1">
            <CategoryLink
              href="/cards"
              title="บัตรเติมเกม"
              desc="Roblox · Steam · Razer"
              color="bg-bar"
            />
          </div>
        </section>

        {/* Game grid */}
        <section className="mt-5">
          <h2 className="mb-3 text-base font-semibold text-zinc-800">
            เกมยอดนิยม
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {featured.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>

        {/* Secondary Banner */}
        <section className="mt-6 sm:rounded-xl sm:overflow-hidden">
          <Banner />
        </section>

        {/* More — list of games (Like home2.svg) */}
        <section className="mt-6">
          <h2 className="mb-3 text-base font-semibold text-zinc-800">
            เกมอื่นๆ อีกมากมาย
          </h2>
          <ul className="flex flex-col gap-2">
            {more.map((g) => (
              <li key={g.id}>
                <GameListRow game={g} />
              </li>
            ))}
          </ul>
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
