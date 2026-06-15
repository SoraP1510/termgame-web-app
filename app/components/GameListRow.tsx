import Image from "next/image";
import type { Game } from "@/app/lib/mockData";

type Props = {
  game: Game;
};

export default function GameListRow({ game }: Props) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-lg bg-white p-2.5 ring-1 ring-black/5 transition hover:bg-zinc-50"
    >
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-zinc-100">
        <Image
          src={game.image}
          alt={game.name}
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-zinc-800">{game.name}</p>
        <p className="text-xs text-zinc-500">
          เริ่มต้น{" "}
          <span className="font-semibold text-primary">฿{game.priceStart}</span>
        </p>
      </div>
      <span
        className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white"
        aria-hidden
      >
        เติม
      </span>
    </a>
  );
}
