import { Link } from "@tanstack/react-router";
import logo from "@/assets/alfador-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="Alfador home">
      <img
        src={logo.url}
        alt="Alfador logo"
        width={48}
        height={48}
        className="h-11 w-11 rounded-xl shadow-soft transition-transform duration-300 group-hover:scale-105 md:h-12 md:w-12"
      />
      <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">Alfador</span>
    </Link>
  );
}
