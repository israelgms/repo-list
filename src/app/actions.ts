import githubApi from "@/services/githubApi";

export async function getRepositoryListByUserName({
  userName,
}: {
  userName?: string;
}) {
  if (!userName) return [];

  try {
    const response = await githubApi.get(`/users/${userName}/repos`);

    return response.data;
  } catch (error) {
    console.log('error', error)
  }
}
