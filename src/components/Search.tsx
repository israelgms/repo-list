"use client";

import React from "react";

export function Search() {
  function handleSearch(value: string) {
    if (!value || value === "") return;

    
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
