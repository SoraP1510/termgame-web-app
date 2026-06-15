import type { HistoryItem as HistoryItemT, HistoryStatus } from "@/app/lib/mockData";

type Props = {
  item: HistoryItemT;
};

const STATUS_LABEL: Record<HistoryStatus, string> = {
  success: "ชำระเงินสำเร็จ",
  pending: "รอการชำระเงิน",
  failed: "ชำระเงินไม่สำเร็จ",
};

const STATUS_STYLE: Record<HistoryStatus, string> = {
  success: "text-emerald-500",
  pending: "text-amber-500",
  failed: "text-rose-500",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).replace(",", "");
}

export default function HistoryItem({ item }: Props) {
  return (
    <li className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-zinc-50 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">#{item.ref}</span>
        </div>
        <span className={["text-xs font-bold", STATUS_STYLE[item.status]].join(" ")}>
          {STATUS_LABEL[item.status]}
        </span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-zinc-800">{item.game}</p>
          <p className="text-[11px] text-zinc-400">{formatDate(item.date)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-400">ยอดชำระ</p>
          <p className="text-lg font-black text-primary">฿{item.amount.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between rounded-xl bg-zinc-50 px-3 py-2">
        <span className="text-[10px] font-medium text-zinc-500">ช่องทางการชำระเงิน</span>
        <span className="text-[10px] font-bold text-zinc-700">QR PromptPay</span>
      </div>
    </li>
  );
}
