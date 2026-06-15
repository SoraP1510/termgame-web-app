import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default function AuthFormShell({ title, subtitle, children, footer }: Props) {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <div className="mb-5 flex flex-col items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt="TermGame Logo"
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover ring-2 ring-bar"
          />
          <h1 className="text-xl font-semibold text-primary">{title}</h1>
          {subtitle && (
            <p className="text-center text-sm text-zinc-500">{subtitle}</p>
          )}
        </div>
        {children}
        {footer && (
          <div className="mt-5 text-center text-sm text-zinc-600">{footer}</div>
        )}
        <p className="mt-4 text-center text-xs text-zinc-400">
          <Link href="/" className="hover:text-primary">
            ← กลับหน้าหลัก
          </Link>
        </p>
      </div>
    </main>
  );
}
