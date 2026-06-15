// Mock data สำหรับเกม, บัตรเติมเกม, และประวัติ

export type Package = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
};

export type Game = {
  id: string;
  name: string;
  category: "topup" | "card";
  image: string; // path ใน public/images/
  priceStart: number; // ราคาเริ่มต้น (บาท)
  tag?: string; // เช่น "HOT", "NEW"
  packages?: Package[];
};

// รายชื่อเกม (ใช้ซ้ำรูป promotion เป็น placeholder เพราะยังไม่มี assets ของเกมจริง)
export const GAMES: Game[] = [
  { 
    id: "free-fire", 
    name: "Free Fire", 
    category: "topup", 
    image: "https://placehold.co/600x400/png", 
    priceStart: 35, 
    tag: "HOT",
    packages: [
      { id: "ff-1", name: "20 Diamonds", price: 35 },
      { id: "ff-2", name: "50 Diamonds", price: 85 },
      { id: "ff-3", name: "100 Diamonds", price: 170, originalPrice: 190 },
      { id: "ff-4", name: "200 Diamonds", price: 340 },
    ]
  },
  { 
    id: "roblox", 
    name: "Roblox", 
    category: "topup", 
    image: "https://placehold.co/600x400/png", 
    priceStart: 50,
    packages: [
      { id: "rb-1", name: "80 Robux", price: 50 },
      { id: "rb-2", name: "400 Robux", price: 250 },
      { id: "rb-3", name: "800 Robux", price: 500 },
    ]
  },
  { id: "mlbb", name: "Mobile Legends", category: "topup", image: "https://placehold.co/600x400/png", priceStart: 45, tag: "HOT" },
  { id: "genshin", name: "Genshin Impact", category: "topup", image: "https://placehold.co/600x400/png", priceStart: 60 },
  { id: "pubg", name: "PUBG Mobile", category: "topup", image: "https://placehold.co/600x400/png", priceStart: 35 },
  { id: "valorant", name: "Valorant", category: "topup", image: "https://placehold.co/600x400/png", priceStart: 100 },
  { id: "honor-kings", name: "Honor of Kings", category: "topup", image: "https://placehold.co/600x400/png", priceStart: 35, tag: "NEW" },
  { id: "ragnarok", name: "Ragnarok M", category: "topup", image: "https://placehold.co/600x400/png", priceStart: 50 },
];

// บัตรเติมเกม
export const CARDS: Game[] = [
  { 
    id: "roblox-card", 
    name: "Roblox Gift Card", 
    category: "card", 
    image: "https://placehold.co/600x400/png", 
    priceStart: 100,
    packages: [
      { id: "rbc-1", name: "$10 Gift Card", price: 350 },
      { id: "rbc-2", name: "$25 Gift Card", price: 875 },
    ]
  },
  { id: "steam-card", name: "Steam Wallet", category: "card", image: "https://placehold.co/600x400/png", priceStart: 100, tag: "HOT" },
  { id: "razer-card", name: "Razer Gold", category: "card", image: "https://placehold.co/600x400/png", priceStart: 50 },
  { id: "google-play", name: "Google Play", category: "card", image: "https://placehold.co/600x400/png", priceStart: 100 },
  { id: "app-store", name: "App Store & iTunes", category: "card", image: "https://placehold.co/600x400/png", priceStart: 100 },
  { id: "netflix-card", name: "Netflix Gift Card", category: "card", image: "https://placehold.co/600x400/png", priceStart: 250, tag: "NEW" },
];

// รายการโปรโมชัน (สำหรับ carousel)
export const PROMOTIONS: { id: string; image: string; alt: string }[] = [
  { id: "promo-1", image: "/images/promotion1.jpg", alt: "โปรโมชันที่ 1" },
  { id: "promo-2", image: "/images/promotion2.jpg", alt: "โปรโมชันที่ 2" },
  { id: "promo-3", image: "/images/promotion3.jpg", alt: "โปรโมชันที่ 3" },
];

// ประวัติการเติม (mock)
export type HistoryStatus = "success" | "pending" | "failed";

export type HistoryItem = {
  id: string;
  date: string; // ISO
  game: string;
  amount: number; // บาท
  status: HistoryStatus;
  ref: string; // เลขอ้างอิง
};

export const HISTORY: HistoryItem[] = [
  { id: "h1", date: "2026-06-14T10:23:00Z", game: "Free Fire", amount: 150, status: "success", ref: "TF2026061401" },
  { id: "h2", date: "2026-06-13T18:11:00Z", game: "Roblox Gift Card", amount: 300, status: "success", ref: "CD2026061302" },
  { id: "h3", date: "2026-06-12T09:45:00Z", game: "Mobile Legends", amount: 250, status: "failed", ref: "TF2026061203" },
  { id: "h4", date: "2026-06-10T21:00:00Z", game: "Steam Wallet", amount: 500, status: "success", ref: "CD2026061004" },
  { id: "h5", date: "2026-06-08T14:32:00Z", game: "Genshin Impact", amount: 600, status: "pending", ref: "TF2026060805" },
  { id: "h6", date: "2026-06-05T11:08:00Z", game: "Razer Gold", amount: 100, status: "success", ref: "CD2026060506" },
  { id: "h7", date: "2026-06-02T19:50:00Z", game: "PUBG Mobile", amount: 250, status: "success", ref: "TF2026060207" },
];
