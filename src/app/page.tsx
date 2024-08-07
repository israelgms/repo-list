import { RepositoryList } from "@/components/RepositoryList";
import SearchByUserInfo from "@/components/SearchByUserInfo";
import { UserCard } from "@/components/UserCard";
import { getUserData } from "@/services/getUserData";

interface HomeProps {
  searchParams: {
    search: string;
    page?: number;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const userName = searchParams?.search;
  const page = searchParams?.page;

  const userData = await getUserData({
    userName,
  });

  if (!userName) {
    return (
      <main className="p-6">
        <SearchByUserInfo />
      </main>
    );
  }

  return (
    <main className="p-6">
      <div className="flex gap-12 flex-wrap md:flex-nowrap">
        {userData && (
          <div>
            <UserCard {...userData} />
          </div>
        )}

        <RepositoryList userName={userName} page={page} />
      </div>
    </main>
  );
}
