import Collections from "@/components/layout/search/collections";
import FilterList from "@/components/layout/search/filter-list";
import React from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="category min-h-screen">
      <div className="mx-auto max-w-screen-2xl flex justify-between p-4 lg:px-6 ">
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <Collections />
          {children}
          <FilterList />
        </div>
      </div>
    </div>
  );
}
