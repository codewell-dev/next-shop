"use client";
import { ThreeItemGrid } from "@/components/grid/three-items";
import Carousel from "@/components/carousel";

export default function Home() {
  const items = [
    {
      id: 1,
      title: "Acme Circles T-Shirt",
      path: "../main-shirt.svg",
      price: "$20.00 USD",
      imgSize: { height: 600, width: 800 },
      position: "center",
      size: "full",
    },
    {
      id: 2,
      title: "Acme Drawstring Bag",
      path: "../main-bag.svg",
      price: "$12.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "half",
    },
    {
      id: 3,
      title: "Acme Cup",
      path: "../main-cup.svg",
      price: "$15.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "half",
    },
  ];
  return (
    <div className="w-full h-full">
      <ThreeItemGrid />
      <Carousel /> 
    </div>
  );
}
