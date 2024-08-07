import { Heart } from "lucide-react";
import Link from "next/link";
import { Search } from "./Search";

export function Header() {
  return (
    <header>
      <div className="flex justify-between items-center pl-6 gap-2">
        <div className="w-6/12">
          <Search />
        </div>

        <nav>
          <Link href="/favorites">
            <div className="flex gap-1 bg-primary p-6 text-secondary-LIGHT font-medium">
              <Heart />
              Favoritos
            </div>
          </Link>
        </nav>
      </div>

      <hr />
    </header>
  );
}
