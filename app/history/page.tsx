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
        <header className="mt-6">
          <h1 className="text-xl font-semibold text-primary">ประวัติการเติม</h1>
          <p className="mt-0.5 text-sm text-zinc-500">
            รายการเติมเกมและบัตรเติมเกมล่าสุดของคุณ
          </p>
        </header>

        {/* Filter tabs */}
        <div className="mt-6 flex gap-2 overflow-x-auto">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={[
                  "flex-shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition",
                  active
                    ? "bg-primary text-white shadow"
                    : "bg-white text-zinc-600 ring-1 ring-black/5 hover:text-primary",
                ].join(" ")}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* List */}
        <ul className="mt-6 flex flex-col gap-2.5">
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
