import { getRepositoryListByUserName } from "@/app/actions";
import { RepositoryItem } from "./RepositoryItem";
import React from "react";
import { RepositoryIntersectionObserver } from "./RepositoryIntersectionObserver";


interface RepositoryListProps {
  userName?: string;
  page?: number;
}

export async function RepositoryList({ userName, page }: RepositoryListProps) {
  const repositoryList = await getRepositoryListByUserName({
    userName,
    page,
  });

  return (
    <div className="flex flex-col gap-4">
      <h1>Repositórios</h1>
      {repositoryList?.map((repository) => (
        <React.Fragment key={repository.id}>
          <RepositoryItem {...repository} />
        </React.Fragment>
      ))}

      {repositoryList?.length > 5 && <RepositoryIntersectionObserver />}
    </div>
  );
}
