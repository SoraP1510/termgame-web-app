import Image from "next/image";
import type { Game } from "@/app/lib/mockData";

type Props = {
  game: Game;
};

export default function GameCard({ game }: Props) {
  return (
    <a
      href="#"
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-square w-full bg-zinc-100">
        <Image
          src={game.image}
          alt={game.name}
          fill
          sizes="(max-width: 768px) 50vw, 200px"
          className="object-cover"
        />
        {game.tag && (
          <span className="absolute left-1.5 top-1.5 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow">
            {game.tag}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-0.5 p-2">
        <p className="truncate text-sm font-medium text-zinc-800">{game.name}</p>
        <p className="text-xs text-zinc-500">
          เริ่มต้น{" "}
          <span className="font-semibold text-primary">฿{game.priceStart}</span>
        </p>
      </div>
    </a>
  );
}
