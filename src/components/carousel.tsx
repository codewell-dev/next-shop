import React from "react";
import GridTileImage from "./grid/grid-tile-images";

export default function Carousel() {
  const items = [
    {
      id: 1,
      title: "Acme Circles T-Shirt",
      path: "./main-shirt.svg",
      price: "$20.00 USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "",
    },
    {
      id: 2,
      title: "Acme Drawstring Bag",
      path: "./main-bag.svg",
      price: "$12.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "",
    },
    {
      id: 3,
      title: "Acme Cup",
      path: "./main-cup.svg",
      price: "$15.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "",
    },
    {
      id: 4,
      title: "Acme Circles T-Shirt",
      path: "./main-shirt.svg",
      price: "$20.00 USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "",
    },
    {
      id: 5,
      title: "Acme Drawstring Bag",
      path: "./main-bag.svg",
      price: "$12.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "",
    },
    {
      id: 6,
      title: "Acme Cup",
      path: "./main-cup.svg",
      price: "$15.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "",
    },
    {
      id: 7,
      title: "Acme Circles T-Shirt",
      path: "./main-shirt.svg",
      price: "$20.00 USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "",
    },
    {
      id: 8,
      title: "Acme Drawstring Bag",
      path: "./main-bag.svg",
      price: "$12.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "",
    },
    {
      id: 9,
      title: "Acme Cup",
      path: "./main-cup.svg",
      price: "$15.00USD",
      imgSize: { height: 300, width: 350 },
      position: "bottom",
      size: "",
    },
  ];
  const products = [...items];
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex animate-carousel gap-4 w-full">
        <div className="flex gap-6">
          {products.map((i: any) => (
            <div className="w-96 h-80 mb-4 rounded-lg border hover:border-blue-600" key={i.id}>
              <GridTileImage
                imgSrc={i.path}
                title={i.title}
                position={i.position}
                size={i.size}
                price={i.price}
                id={i.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
