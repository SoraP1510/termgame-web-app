import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GAMES, CARDS } from "@/app/lib/mockData";
import TopBar from "@/app/components/TopBar";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function TopupDetailPage({ params }: Props) {
  const { id } = await params;
  
  // ค้นหาจากทั้ง GAMES และ CARDS
  const allItems = [...GAMES, ...CARDS];
  const item = allItems.find((i) => i.id === id);

  if (!item) {
    notFound();
  }

  const isTopup = item.category === "topup";

  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-24 pt-4">
        {/* Back Button */}
        <Link 
          href={isTopup ? "/topup" : "/cards"}
          className="mb-4 inline-flex items-center text-sm font-medium text-zinc-500 hover:text-primary"
        >
          <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          ย้อนกลับ
        </Link>

        {/* Item Header */}
        <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-100">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-800">{item.name}</h1>
            <p className="text-sm text-zinc-500">
              {isTopup ? "เติมเงินเข้าบัญชีเกมโดยตรง" : "ซื้อรหัสบัตรเติมเงิน"}
            </p>
          </div>
        </div>

        {/* User Info (Only for topup) */}
        {isTopup && (
          <section className="mt-6">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-zinc-800">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">1</span>
              ข้อมูลตัวละคร
            </h2>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <div className="space-y-4">
                <div>
                  <label htmlFor="userId" className="mb-1.5 block text-sm font-medium text-zinc-700">
                    User ID
                  </label>
                  <input
                    type="text"
                    id="userId"
                    placeholder="ระบุ User ID ของคุณ"
                    className="w-full rounded-xl border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="zoneId" className="mb-1.5 block text-sm font-medium text-zinc-700">
                    Zone ID (ถ้ามี)
                  </label>
                  <input
                    type="text"
                    id="zoneId"
                    placeholder="ระบุ Zone ID"
                    className="w-full rounded-xl border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Packages */}
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-zinc-800">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
              {isTopup ? "2" : "1"}
            </span>
            เลือกแพ็กเกจ
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {item.packages?.map((pkg) => (
              <button
                key={pkg.id}
                className="group relative flex flex-col items-center justify-center rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5 transition hover:ring-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <p className="mb-1 text-sm font-bold text-zinc-800 group-hover:text-primary">{pkg.name}</p>
                <p className="text-lg font-extrabold text-primary">฿{pkg.price}</p>
                {pkg.originalPrice && (
                  <p className="text-[10px] text-zinc-400 line-through">฿{pkg.originalPrice}</p>
                )}
              </button>
            ))}
            {/* Fallback if no packages defined in mock */}
            {(!item.packages || item.packages.length === 0) && (
              <div className="col-span-full rounded-xl bg-zinc-50 p-8 text-center text-zinc-500 ring-1 ring-inset ring-black/5">
                ขออภัย ไม่พบข้อมูลแพ็กเกจในขณะนี้
              </div>
            )}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mt-8">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-zinc-800">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
              {isTopup ? "3" : "2"}
            </span>
            เลือกช่องทางการชำระเงิน
          </h2>
          <div className="space-y-3">
            {["PromptPay", "TrueMoney Wallet", "Credit/Debit Card", "Mobile Banking"].map((method) => (
              <button
                key={method}
                className="flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-zinc-100"></div>
                  <span className="font-medium text-zinc-800">{method}</span>
                </div>
                <div className="h-5 w-5 rounded-full border-2 border-zinc-200"></div>
              </button>
            ))}
          </div>
        </section>

        {/* Sticky Bottom Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-zinc-100 bg-white/80 p-4 pb-safe backdrop-blur-md">
          <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">ราคารวม</span>
              <span className="text-2xl font-black text-primary">฿0.00</span>
            </div>
            <button className="flex-1 rounded-2xl bg-primary px-8 py-4 text-center font-bold text-white shadow-lg shadow-primary/30 transition hover:scale-[1.02] active:scale-95 disabled:opacity-50">
              ยืนยันการสั่งซื้อ
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
