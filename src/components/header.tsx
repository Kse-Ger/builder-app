import { routes } from "@/routing/routes";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="container mx-auto p-4 flex items-center justify-between">
        
        <div className="text-lg font-bold">
          <Link href="/">
            BUILDER-APP
          </Link>
        </div>
        
        <ul className="flex space-x-6">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

  );
}
