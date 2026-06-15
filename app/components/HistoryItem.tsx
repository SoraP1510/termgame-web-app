import type { HistoryItem as HistoryItemT, HistoryStatus } from "@/app/lib/mockData";

type Props = {
  item: HistoryItemT;
};

const STATUS_LABEL: Record<HistoryStatus, string> = {
  success: "สำเร็จ",
  pending: "กำลังดำเนินการ",
  failed: "ล้มเหลว",
};

const STATUS_STYLE: Record<HistoryStatus, string> = {
  success: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  failed: "bg-rose-100 text-rose-700",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function HistoryItem({ item }: Props) {
  return (
    <li className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-black/5">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-bar/30 text-primary">
        <svg
          width="20"
          height="20"
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
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-zinc-800">{item.game}</p>
        <p className="text-xs text-zinc-500">
          {formatDate(item.date)} · {item.ref}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <span className="text-sm font-semibold text-primary">฿{item.amount}</span>
        <span
          className={[
            "rounded-full px-2 py-0.5 text-[10px] font-medium",
            STATUS_STYLE[item.status],
          ].join(" ")}
        >
          {STATUS_LABEL[item.status]}
        </span>
      </div>
    </li>
  );
}
