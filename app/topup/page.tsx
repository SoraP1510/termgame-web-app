import TopBar from "@/app/components/TopBar";
import PromotionCarousel from "@/app/components/PromotionCarousel";
import GameCard from "@/app/components/GameCard";
import { GAMES } from "@/app/lib/mockData";

export default function TopupPage() {
  // กรองเฉพาะเกมที่อยู่ในหมวดเติมเกม (topup)
  const topupGames = GAMES.filter((g) => g.category === "topup");

  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-6">
        {/* Banner (แบบเลื่อนได้เหมือนหน้าหลัก) */}
        <section className="-mx-4 mt-2 sm:mx-0 sm:mt-3 sm:rounded-xl sm:overflow-hidden">
          <PromotionCarousel />
        </section>

        {/* Game grid - แสดงเฉพาะเติมเกม */}
        <section className="mt-5">
          <header className="mb-4">
            <h1 className="text-xl font-bold text-zinc-800">บริการเติมเกม</h1>
            <p className="text-sm text-zinc-500">เลือกเกมที่คุณต้องการเติมเงิน</p>
          </header>
          
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {topupGames.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>
        
        {/* ไม่มีส่วน more ตามคำขอ */}
      </main>
    </>
  );
}
