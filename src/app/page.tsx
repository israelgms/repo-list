import { RepositoryList } from "@/components/RepositoryList";

interface HomeProps {
  searchParams: {
    search: string;
    page?: number;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const userName = searchParams?.search;
  const page = searchParams?.page;

  return (
    <main className="p-6">
      <RepositoryList userName={userName} page={page} />
    </main>
  );
}
