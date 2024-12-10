"use client"
import { SelectFilter } from "@/components/select-filter";
import { useGetCategoryListQuery } from "@/lib/products";
import Link from "next/link";

export default function Collections() {
  const { data: dataCategories, isLoading: isLoadingCategories } =
    useGetCategoryListQuery<{
      data: string[];
      error: string;
      isLoading: boolean;
    }>("");
  let categoryName = 'category';
  return (
    <div>
      <div className="category_left w-48 md:block hidden">
        <p className="text-neutral-500 text-sm">Collections</p>
        <div className="flex flex-col">
          {dataCategories?.map((i: string, index: number) => (
            <Link
              href={`/search/${i}`}
              key={index}
              className={`text-sm my-1 uppercase w-fit border-b hover:border-neutral-600 ${
                i == categoryName ? `border-neutral-600` : `border-transparent`
              }`}
            >
              {i}
            </Link>
          ))}
        </div>
      </div>
      <SelectFilter items={dataCategories} />
    </div>
  );
}
