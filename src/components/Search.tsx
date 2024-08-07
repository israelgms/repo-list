"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export function Search() {
  const searchParams = useSearchParams();
  const route = useRouter();

  function handleSearch(value: string) {
    const query = new URLSearchParams(searchParams.toString());

    query.set("search", value);
    route.push(`?${query}`);
  }

  const debounce = (onChange: (value: string) => void) => {
    let timeout: NodeJS.Timeout;

    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const form = e.currentTarget.value;
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };

  return (
    <input
      type="text"
      placeholder="Buscar usuário"
      onChange={debounce((value: string) => {
        handleSearch(value);
      })}
    />
  );
}
