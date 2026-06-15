import TopBar from "@/app/components/TopBar";
import PromotionCarousel from "@/app/components/PromotionCarousel";
import GameCard from "@/app/components/GameCard";
import { CARDS } from "@/app/lib/mockData";

export default function CardsPage() {
  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-6">
        {/* Banner */}
        <section className="-mx-4 mt-2 sm:mx-0 sm:mt-3 sm:rounded-xl sm:overflow-hidden">
          <PromotionCarousel />
        </section>

        {/* Gift cards grid */}
        <section className="mt-5">
          <header className="mb-4">
            <h1 className="text-xl font-bold text-zinc-800">บัตรเติมเกม</h1>
            <p className="text-sm text-zinc-500">เลือกซื้อบัตรเติมเกมที่คุณต้องการ</p>
          </header>
          
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {CARDS.map((c) => (
              <GameCard key={c.id} game={c} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
