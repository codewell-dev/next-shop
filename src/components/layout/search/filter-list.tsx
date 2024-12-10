import Link from "next/link";
import React from "react";

export default function FilterList() {
  const sortby = [
    {
      id: 1,
      title: "Relevance",
      path: "/",
    },
    {
      id: 2,
      title: "Trending",
      path: "/",
    },
    {
      id: 3,
      title: "Latest arrivals",
      path: "/",
    },
    {
      id: 4,
      title: "Price: Low to high",
      path: "/",
    },
  ];
  return (
    <div className="category_right w-36 md:block hidden">
      <p className="text-neutral-500 text-sm">Collections</p>
      <div className="flex flex-col">
        {sortby.map((i) => (
          <Link
            href={i.path}
            key={i.id}
            className="text-sm hover:underline my-0.5"
          >
            {i.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
