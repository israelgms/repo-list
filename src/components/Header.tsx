import Link from "next/link";

export function Header({}) {
  return (
    <div>
      <input type="text" placeholder="Buscar usuário" />

      <Link href="/favorites">
        <div className="bg-primary p-6 text-secondary-LIGHT font-medium">
          Favoritos
        </div>
      </Link>

      <hr></hr>
    </div>
  );
}
