import githubApi from "@/services/githubApi";

export async function getUserData({ userName }: { userName?: string }) {
  if (!userName) return [];

  try {
    const response = await githubApi.get(`/users/${userName}`);

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}
