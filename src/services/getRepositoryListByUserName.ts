import githubApi from "@/services/githubApi";

export async function getRepositoryListByUserName({
  userName,
  page = 1,
  perPage = 6,
}: {
  userName?: string;
  page?: number;
  perPage?: number;
}) {
  if (!userName) return [];

  try {
    const response = await githubApi.get(`/users/${userName}/repos`, {
      params: {
        page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}
