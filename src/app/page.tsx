"use client";
import { ThreeItemGrid } from "@/components/grid/three-items";
import Carousel from "@/components/carousel";
import { useEffect, useState } from "react";
import { useGetProductByIdQuery, useGetProductsQuery } from "@/lib/products";
import { Progress } from "@/components/ui/progress";
import Spinner from "@/components/spinner";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useDispatch } from "react-redux";
import { getAllData } from "@/lib/slices/cartSlice";

export default function Home() {
  const {
    data: dataThree,
    error: errorThree,
    isLoading: isLoadingThree,
  } = useGetProductsQuery("3");
  const {
    data: dataCarousel,
    error: errorCarousel,
    isLoading: isLoadingCarousel,
  } = useGetProductsQuery("15");
  return (
    <div className="w-full h-full">
      {isLoadingThree && isLoadingCarousel && <Spinner />}
      <ThreeItemGrid items={dataThree?.products} />
      <Carousel items={dataCarousel?.products} />
    </div>
  );
}
