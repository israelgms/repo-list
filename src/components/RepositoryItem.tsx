"use client";

import { githubLanguageColors } from "@/constants/githubLanguageColors";
import { RepositoryItemProps } from "@/types/github";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

type Language = keyof typeof githubLanguageColors;

export function RepositoryItem({
  id,
  language,
  name,
  description,
  updated_at,
}: RepositoryItemProps) {
  const color = githubLanguageColors[(language as Language) || "default"];

  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const currentFavoriteListString = localStorage.getItem("favoriteList");
    if (currentFavoriteListString) {
      const currentFavoriteList: Array<RepositoryItemProps> = JSON.parse(
        currentFavoriteListString
      );
      const repositoryExists = currentFavoriteList.some(
        (favorite: RepositoryItemProps) => favorite.id === id
      );
      setIsFavorited(repositoryExists);
    }
  }, []);

  function handleFavoriteRepository() {
    const currentFavoriteListString = localStorage.getItem("favoriteList");

    let newFavoriteList: Array<RepositoryItemProps> | [] = [];

    if (currentFavoriteListString) {
      const currentFavoriteList: Array<RepositoryItemProps> = JSON.parse(
        currentFavoriteListString
      );

      const repositoryExists = currentFavoriteList.some(
        (favorite: RepositoryItemProps) => favorite.id === id
      );

      if (repositoryExists) {
        newFavoriteList = currentFavoriteList.filter(
          (favorite: RepositoryItemProps) => favorite.id !== id
        );

        setIsFavorited(false);
      } else {
        newFavoriteList = [
          ...currentFavoriteList,
          { id, language, name, description, updated_at },
        ];

        setIsFavorited(true);
      }
    } else {
      newFavoriteList = [{ id, language, name, description, updated_at }];
    }

    localStorage.setItem("favoriteList", JSON.stringify(newFavoriteList));

    const updateEvent = new CustomEvent("favoriteListUpdated", {
      detail: { newFavoriteList },
    });
    window.dispatchEvent(updateEvent);
  }

  const updatedAt = new Date(updated_at);
  const formattedDate = updatedAt.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-2 rounded-md border border-divider p-4 relative">
      <h2 className="text-neutral font-semibold">{name}</h2>

      {description ? (
        <p className="text-sm text-info">{description}</p>
      ) : (
        <div className="h-5" />
      )}

      <div className="flex gap-4">
        {language && (
          <div className="flex gap-2 items-center">
            <div
              style={{ backgroundColor: color }}
              className="rounded-full h-4 w-4"
            />
            <span className="text-xs text-neutral">{language}</span>
          </div>
        )}
        <span className="text-xs text-neutral">{formattedDate}</span>
      </div>

      <div
        className={`flex items-center justify-center rounded-full h-10 w-10 absolute right-4 top-4 cursor-pointer bg-info-LIGHT border transition-colors duration-700 ${
          isFavorited
            ? "text-primary border-primary bg-secondary-LIGHT"
            : "text-info border-info-LIGHT"
        } hover:text-primary hover:border-primary hover:bg-secondary-LIGHT`}
        onClick={handleFavoriteRepository}
      >
        <Heart />
      </div>
    </div>
  );
}
