import { Link } from "@tanstack/react-router";
import logo from "@/assets/alfador-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="Alfador home">
      <img
        src={logo.url}
        alt="Alfador logo"
        width={56}
        height={56}
        className="h-12 w-12 rounded-xl shadow-soft transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">
          Alfador
        </span>
        <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] opacity-60 sm:block">
          Bridging business and technology
        </span>
      </span>
    </Link>
  );
}
