import { getRepositoryListByUserName } from "@/app/actions";
import { RepositoryItem } from "./RepositoryItem";
import React from "react";
import { RepositoryIntersectionObserver } from "./RepositoryIntersectionObserver";
import { UserNotFound } from "./UserNotFound";

interface RepositoryListProps {
  userName?: string;
  page?: number;
}

export async function RepositoryList({ userName, page }: RepositoryListProps) {
  const { data: repositoryList, statusCode } =
    await getRepositoryListByUserName({
      userName,
      page,
    });

  return (
    <section className="w-full">
      {statusCode === 200 ? (
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-primary font-semibold">Repositórios</h1>

          {repositoryList?.map((repository) => (
            <React.Fragment key={repository.id}>
              <RepositoryItem {...repository} />
            </React.Fragment>
          ))}

          {repositoryList?.length > 5 && <RepositoryIntersectionObserver />}
        </div>
      ) : (
        <div className="flex justify-center">
          <UserNotFound userName={userName} />
        </div>
      )}
    </section>
  );
}
