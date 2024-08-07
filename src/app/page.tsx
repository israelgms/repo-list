import { RepositoryList } from "@/components/RepositoryList";
import Image from "next/image";

interface HomeProps {
  searchParams: {
    search: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const userName = searchParams?.search;

  return (
    <main className="p-6">
      <RepositoryList userName={userName} />
    </main>
  );
}
