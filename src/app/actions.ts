import githubApi from "@/services/githubApi";
import { RepositoryItemProps } from "@/types/github";

const repositoryCache = new Map<string, any[]>();

interface RepositoryResponse {
  statusCode: number;
  data: RepositoryItemProps[];
}

export async function getRepositoryListByUserName({
  userName,
  page = 1,
  perPage = 6,
}: {
  userName?: string;
  page?: number;
  perPage?: number;
}): Promise<RepositoryResponse> {
  if (!userName) return { statusCode: 400, data: [] };

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

      return { statusCode: 200, data: response.data };
    } else {
      cachedData = [...cachedData, ...response.data];

      repositoryCache.set(userName, cachedData);

      return { statusCode: 200, data: cachedData };
    }
  } catch (_) {
    return { statusCode: 400, data: cachedData };
  }
}
