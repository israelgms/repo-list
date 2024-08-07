import githubApi from "@/services/githubApi";
import { RepositoryListProps } from "@/types/github";

const repositoryCache = new Map<string, any[]>();

export async function getRepositoryListByUserName({
  userName,
  page = 1,
  perPage = 6,
}: {
  userName?: string;
  page?: number;
  perPage?: number;
}): Promise<RepositoryListProps | []> {
  if (!userName) return [];

  let cachedData = repositoryCache.get(userName) || [];

  try {
    const response = await githubApi.get(`/users/${userName}/repos`, {
      params: {
        page,
        per_page: perPage,
      },
    });

    if (page === 1) {
      repositoryCache.set(userName, response.data);

      return response.data;
    } else {
      cachedData = [...cachedData, ...response.data];

      repositoryCache.set(userName, cachedData);

      return cachedData;
    }
  } catch (error) {
    console.log("error", error);
    return cachedData;
  }
}
