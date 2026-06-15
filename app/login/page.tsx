import Link from "next/link";
import AuthFormShell from "@/app/components/AuthFormShell";

export default function LoginPage() {
  return (
    <AuthFormShell
      title="เข้าสู่ระบบ"
      subtitle="เข้าสู่ระบบเพื่อดำเนินการเติมเกมของคุณ"
      footer={
        <>
          ยังไม่มีบัญชี?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            สมัครสมาชิก
          </Link>
        </>
      }
    >
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600">Username</label>
          <input
            type="text"
            className="rounded-lg bg-zinc-50 px-3 py-2 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-primary/50"
            placeholder="กรอกชื่อผู้ใช้"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600">Password</label>
          <input
            type="password"
            className="rounded-lg bg-zinc-50 px-3 py-2 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-primary/50"
            placeholder="กรอกรหัสผ่าน"
          />
        </div>
        <button
          type="submit"
          className="mt-2 rounded-lg bg-primary py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition"
        >
          เข้าสู่ระบบ
        </button>
      </form>

      <div className="relative my-6 flex items-center justify-center">
        <div className="w-full border-t border-zinc-200"></div>
        <span className="absolute bg-white px-2 text-[10px] uppercase text-zinc-400">
          หรือ
        </span>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-700 ring-1 ring-black/10 transition hover:bg-zinc-50"
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        เข้าสู่ระบบด้วย Google
      </button>
    </AuthFormShell>
  );
}
