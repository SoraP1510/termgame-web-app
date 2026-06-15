import Link from "next/link";
import AuthFormShell from "@/app/components/AuthFormShell";

export default function RegisterPage() {
  return (
    <AuthFormShell
      title="สมัครสมาชิก"
      subtitle="สร้างบัญชีเพื่อเริ่มใช้งานบริการเติมเกมของเรา"
      footer={
        <>
          มีบัญชีอยู่แล้ว?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            เข้าสู่ระบบ
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
            placeholder="ตั้งชื่อผู้ใช้ของคุณ"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600">Email</label>
          <input
            type="email"
            className="rounded-lg bg-zinc-50 px-3 py-2 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-primary/50"
            placeholder="example@email.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-zinc-600">Password</label>
          <input
            type="password"
            className="rounded-lg bg-zinc-50 px-3 py-2 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-primary/50"
            placeholder="ตั้งรหัสผ่านของคุณ"
          />
        </div>
        <button
          type="submit"
          className="mt-2 rounded-lg bg-primary py-2 text-sm font-semibold text-white shadow hover:bg-primary/90 transition"
        >
          สมัครสมาชิก
        </button>
      </form>
      
      <p className="mt-4 text-center text-[10px] text-zinc-400">
        การสมัครสมาชิกแสดงว่าคุณยอมรับ ข้อตกลงและเงื่อนไข ของเรา
      </p>
    </AuthFormShell>
  );
}
