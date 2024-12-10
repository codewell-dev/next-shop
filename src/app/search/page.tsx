"use client";

import GridTileImage from "@/components/grid/grid-tile-images";
import { SelectFilter } from "@/components/select-filter";
import Spinner from "@/components/spinner";
import { Product, Products } from "@/lib/interfaces";
import {
  useGetCategoryByNameQuery,
  useGetCategoryListQuery,
  useGetProductsQuery,
} from "@/lib/products";
import Link from "next/link";
import {  useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

export default function Page() {
  const {
    data: dataProducts,
  } = useGetProductsQuery<{
    data: Products;
    error: string;
    isLoading: boolean;
  }>("9");
  const {
    data: dataCategories,
    isLoading: isLoadingCategories,
  } = useGetCategoryListQuery<{
    data: string[];
    error: string;
    isLoading: boolean;
  }>("");
  const searchParams = useSearchParams();
  const categoryName: string | null = searchParams.get("category");
  const {
    data: dataCategory,
    isLoading: isLoadingCategory,
  } = useGetCategoryByNameQuery(categoryName);

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
  if (isLoadingCategories && isLoadingCategory) {
    return <Spinner />;
  }
  
  return (
    <div className="category min-h-screen">
      <div className="mx-auto max-w-screen-2xl flex justify-between p-4 lg:px-6 ">
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <div className="category_left w-48 md:block hidden">
            <p className="text-neutral-500 text-sm">Collections</p>
            <div className="flex flex-col">
              {dataCategories?.map((i: string, index: number) => (
                <Link
                  href={`/search?category=${i}`}
                  key={index}
                  className={`text-sm my-1 uppercase w-fit border-b hover:border-neutral-600 ${
                    i == categoryName
                      ? `border-neutral-600`
                      : `border-transparent`
                  }`}
                >
                  {i}
                </Link>
              ))}
            </div>
          </div>
          <SelectFilter items={dataCategories} />
          {/* <SelectFilter items={dataCategories} /> */}
          <div className="w-full z-0 mt-10">
            <div className="flex flex-wrap gap-4 justify-center">
              <Suspense fallback={<Spinner />}>
                {!categoryName
                  ? dataProducts?.products.map((i: Product) => (
                      <Link
                        href={`/product/${i.id}`}
                        className="w-96 h-80 mb-4 rounded-lg border hover:border-blue-600"
                        key={i.id}
                      >
                        <GridTileImage
                          imgSrc={i.images[0]}
                          title={i.title}
                          price={i.price}
                          id={i.id}
                        />
                      </Link>
                    ))
                  : dataCategory?.products.map((i: Product) => (
                      <Link
                        href={`/product/${i.id}`}
                        className="w-96 h-80 mb-4 rounded-lg border hover:border-blue-600"
                        key={i.id}
                      >
                        <GridTileImage
                          imgSrc={i.images[0]}
                          title={i.title}
                          price={i.price}
                          id={i.id}
                        />
                      </Link>
                    ))}
              </Suspense>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}
