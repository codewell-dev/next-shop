"use client";
import { ThreeItemGrid } from "@/components/grid/three-items";
import Carousel from "@/components/carousel";
import { useGetProductsQuery } from "@/lib/products";
import Spinner from "@/components/spinner";

export default function Home() {
  const {
    data: dataThree,
    isLoading: isLoadingThree,
  } = useGetProductsQuery("3");
  const {
    data: dataCarousel,
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
