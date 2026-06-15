import Image from "next/image";

type Props = {
  className?: string;
  // banner.jpg = 1920x1080 → aspect 16:9
  width?: number;
  height?: number;
};

export default function Banner({ className, width = 1600, height = 900 }: Props) {
  return (
    <div className={["relative w-full overflow-hidden", className].filter(Boolean).join(" ")}>
      <Image
        src="/images/banner.jpg"
        alt="โปรโมชัน"
        width={width}
        height={height}
        priority
        sizes="(max-width: 768px) 100vw, 1024px"
        className="h-auto w-full object-cover"
      />
    </div>
  );
}
