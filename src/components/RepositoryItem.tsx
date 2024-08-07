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
          { id, language, name, description },
        ];

        setIsFavorited(true);
      }
    } else {
      newFavoriteList = [{ id, language, name, description }];
    }

    localStorage.setItem("favoriteList", JSON.stringify(newFavoriteList));
  }

  const marginBottomClass = !language && !description ? "mb-6" : "mb-0";

  return (
    <div className="rounded-md border border-divider p-4 relative">
      <h2 className={marginBottomClass}>{name}</h2>

      <p>{description}</p>

      {language && (
        <div className="flex gap-2 items-center">
          <div
            style={{ backgroundColor: color }}
            className="rounded-full h-4 w-4"
          />
          <span>{language}</span>
        </div>
      )}

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
