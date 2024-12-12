import { routes } from "@/routing/routes";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide text-[#D4AF37]">
          <Link href="/">BUILDER-APP</Link>
        </div>
        <ul className="flex space-x-6">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="rounded-md px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:text-[#D4AF37] hover:bg-[#1A1A2E]"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  );
}
