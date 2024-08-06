import { Heart } from "lucide-react";
import Link from "next/link";

export function Header({}) {
  return (
    <header>
      <div className="flex justify-between pl-6">
        <input type="text" placeholder="Buscar usuário" />

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
