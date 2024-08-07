import { getRepositoryListByUserName } from "@/app/actions";
import { RepositoryItem } from "./RepositoryItem";
import React from "react";

interface RepositoryListProps {
  userName?: string;
}

export async function RepositoryList({ userName }: RepositoryListProps) {
  const repositoryList = await getRepositoryListByUserName({
    userName,
  });

  return (
    <div className="flex flex-col gap-4">
      <h1>Repositórios</h1>
      {repositoryList?.map((repository) => (
        <React.Fragment key={repository.id}>
          <RepositoryItem {...repository} />
        </React.Fragment>
      ))}
    </div>
  );
}
