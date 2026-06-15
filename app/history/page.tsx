"use client";

import { useState } from "react";
import TopBar from "@/app/components/TopBar";
import HistoryItem from "@/app/components/HistoryItem";
import { HISTORY } from "@/app/lib/mockData";
import type { HistoryStatus } from "@/app/lib/mockData";

type Filter = "all" | "success" | "pending" | "failed";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "ทั้งหมด" },
  { key: "success", label: "สำเร็จ" },
  { key: "pending", label: "กำลังทำ" },
  { key: "failed", label: "ล้มเหลว" },
];

export default function HistoryPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const items =
    filter === "all"
      ? HISTORY
      : HISTORY.filter((h) => h.status === (filter as HistoryStatus));

  return (
    <>
      <TopBar />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-6">
        <header className="mt-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-zinc-800 tracking-tight">ประวัติการซื้อ</h1>
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Transaction History</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </header>

        {/* Filter tabs */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={[
                  "flex-shrink-0 rounded-2xl px-5 py-2.5 text-xs font-bold transition-all",
                  active
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white text-zinc-400 ring-1 ring-black/5 hover:text-zinc-600",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* List */}
        <ul className="mt-6 flex flex-col gap-4">
          {items.length === 0 ? (
            <li className="rounded-xl bg-white p-6 text-center text-sm text-zinc-500 ring-1 ring-black/5">
              ไม่มีรายการในหมวดนี้
            </li>
          ) : (
            items.map((item) => <HistoryItem key={item.id} item={item} />)
          )}
        </ul>
      </main>
    </>
  );
}
