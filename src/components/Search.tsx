"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export function Search() {
  const searchParams = useSearchParams();
  const route = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(value: string) {
    const query = new URLSearchParams(searchParams.toString());

    query.set("search", value);
    query.delete("page");

    if (pathname !== "/") {
      route.push(`/?${query}`);
    } else {
      route.push(`?${query}`);
    }
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

  useEffect(() => {
    const searchValue = searchParams.get("search");
    if (searchValue) {
      setSearchValue(searchValue);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
    debounce(handleSearch)(e);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Buscar usuário"
        value={searchValue}
        onChange={handleInputChange}
        className="pr-4 pl-4 pb-2 pt-2 border rounded-lg text-sm w-full"
      />
      <SearchIcon
        className="text-info"
        style={{
          position: "absolute",
          right: "10px",
          top: "15%",
        }}
      />
    </div>
  );
}
