import { Link } from "@tanstack/react-router";
import logo from "@/assets/alfador-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`} aria-label="Alfador home">
      <img
        src={logo.url}
        alt="Alfador logo"
        width={36}
        height={36}
        className="h-9 w-9 rounded-lg shadow-soft transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-display text-lg font-semibold tracking-tight">Alfador</span>
    </Link>
  );
}
