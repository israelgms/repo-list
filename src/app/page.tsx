import { RepositoryList } from "@/components/RepositoryList";
import Image from "next/image";

interface HomeProps {
  searchParams: {
    userName: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const userName = searchParams?.userName;

  return (
    <main>
      <RepositoryList userName={userName} />
    </main>
  );
}
