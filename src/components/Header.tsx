import Link from "next/link";

export function Header({}) {
  return (
    <div>
      <input type="text" placeholder="Buscar usuário" />

      <Link href="/favorites">
        <div>Favoritos</div>
      </Link>

      <hr></hr>
    </div>
  );
}
