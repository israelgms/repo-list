"use client";

import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import { RepositoryItemProps } from "@/types/github";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function FavoriteList() {
  const [favoriteList, setFavoriteList] = useState<RepositoryItemProps[] | []>(
    []
  );

  useEffect(() => {
    const favoriteListString = localStorage.getItem("favoriteList");

    if (favoriteListString) {
      setFavoriteList(JSON.parse(favoriteListString));
    }
  }, []);

  useEffect(() => {
    const handleFavoriteListUpdate = (event: Event) => {
      const customEvent = event as CustomEvent;
      setFavoriteList(customEvent.detail.newFavoriteList);
    };

    window.addEventListener(
      "favoriteListUpdated",
      handleFavoriteListUpdate as EventListener
    );

    return () => {
      window.removeEventListener(
        "favoriteListUpdated",
        handleFavoriteListUpdate as EventListener
      );
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 flex-1">
      {favoriteList?.map((favoriteItem) => (
        <RepositoryItem {...favoriteItem} />
      ))}

      <Link href="/">
        <div className="flex gap-1 font-medium">
          <ChevronLeft />
          Voltar
        </div>
      </Link>
    </div>
  );
}
