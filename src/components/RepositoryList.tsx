import { getRepositoryListByUserName } from "@/app/actions";

interface RepositoryListProps {
  userName?: string;
}

export async function RepositoryList({ userName }: RepositoryListProps) {
  const services = await getRepositoryListByUserName({
    userName,
  });

  return <></>;
}
