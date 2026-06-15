import TopBar from "@/app/components/TopBar";
import GameCard from "@/app/components/GameCard";
import { GAMES } from "@/app/lib/mockData";
import Banner from "@/app/components/Banner";

export default function TopupPage() {
  // กรองเฉพาะเกมที่อยู่ในหมวดเติมเกม (topup)
  const topupGames = GAMES.filter((g) => g.category === "topup");

  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-6">
        {/* Banner (แบบเลื่อนได้เหมือนหน้าหลัก) */}
        <section className="mt-4">
          <h2 className="mb-4 text-base font-semibold text-zinc-800">
            
          </h2>
          <div className="-mx-4 sm:mx-0 sm:rounded-xl sm:overflow-hidden">
            <Banner />
          </div>
        </section>

        {/* Game grid - แสดงเฉพาะเติมเกม */}
        <section className="mt-10">
          <header className="mb-5">
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
