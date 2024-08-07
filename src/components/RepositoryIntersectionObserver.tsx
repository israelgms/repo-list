"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function RepositoryIntersectionObserver() {
  const searchParams = useSearchParams();
  const route = useRouter();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        const query = new URLSearchParams(searchParams.toString());

        const currentPage = Number(query.get("page")) || 1;

        query.set("page", String(currentPage + 1));
        window.history.pushState(null, "", `?${query.toString()}`);

        route.replace(`?${query}`);
      }
    });
    intersectionObserver.observe(document.querySelector("#sentinel"));
    return () => intersectionObserver.disconnect();
  }, [searchParams]);

  return <div id="sentinel" className="w-max h-2" />;
}
