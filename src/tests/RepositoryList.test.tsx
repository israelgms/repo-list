import { describe, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { RepositoryList } from "@/components/RepositoryList";

vi.mock("@/app/actions", () => ({
  getRepositoryListByUserName: vi.fn(),
}));

import { getRepositoryListByUserName } from "@/app/actions";
import Home from "@/app/page";

describe("RepositoryList Component", () => {
  test("renders repository list when data is fetched successfully", async () => {
    (getRepositoryListByUserName as vi.Mock).mockResolvedValue({
      data: [
        { id: 1, name: "Repo 1" },
        { id: 2, name: "Repo 2" },
      ],
      statusCode: 200,
    });

    render(
      await (async () => await RepositoryList({ userName: "user", page: 1 }))()
    );

    await waitFor(() =>
      expect(screen.getByText("Repositórios")).toBeInTheDocument()
    );

    expect(screen.getByText("Repo 1")).toBeInTheDocument();
    expect(screen.getByText("Repo 2")).toBeInTheDocument();
  });

  test("renders UserNotFound component when user is not found", async () => {
    (getRepositoryListByUserName as vi.Mock).mockResolvedValue({
      data: null,
      statusCode: 404,
    });

    render(
      await (async () =>
        await RepositoryList({ userName: "nonexistentuser", page: 1 }))()
    );

    await waitFor(() =>
      expect(screen.getByText(/Nenhum usuário encontrado/i)).toBeInTheDocument()
    );
  });

  test("renders SearchByUserInfo component when search user is empty", async () => {
    const searchParams = {
      search: "",
    };

    render(await (async () => await Home({ searchParams }))());

    await waitFor(() =>
      expect(
        screen.getByText(/Procure pelo login do Usuário/i)
      ).toBeInTheDocument()
    );
  });
});
