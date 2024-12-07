"use client";
import Gallery from "@/components/gallery";
import ToastDemo from "@/components/tostify";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { useGetProductByIdQuery } from "@/lib/products";
import { addProduct } from "@/lib/slices/cartSlice";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product({ params, post, handle }: any) {
  const item = {
    id: 1,
    title: "Acme Circles T-Shirt",
    path: "../main-shirt.svg",
    price: "$20.00 USD",
    imgSize: { height: 600, width: 800 },
    position: "center",
    size: "full",
    images: ["../main-shirt.svg", "../main-cup.svg", "../main-bag.svg"],
  };
  const [open, setOpen] = useState(false);
  const id = useParams();
  const dispath = useAppDispatch();
  const { data, error, isLoading } = useGetProductByIdQuery(id.handle);
  return (
    <div className="w-full p-4 lg:px-6 ">
      <div className="mx-auto max-w-screen-2xl flex shadow-lg border bg-white gap-4">
        <Gallery item={data} />
        <div className="w-1/2 h-[800px] p-5">
          <h1 className="text-6xl mt-10 mb-2">{data?.title}</h1>
          <div className="rounded-full text-white px-2 bg-blue-600 w-fit max-w-40">
            <p className="text-sm px-1.5 py-1.5 font-semibold">
              {data?.price} USD
            </p>
          </div>
          <div className="h-0.5 bg-neutral-200 w-full my-5" />

          {/* <div className="mb-3">
          <p className="text-md mb-2">Color</p>
          <div className="flex gap-3">
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600 cursor-not-allowed opacity-50">
              White
            </p>
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600">
              White
            </p>
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600">
              Black
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-md mb-2">Size</p>
          <div className="flex gap-3">
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600">
              XS
            </p>
            <p className="text-sm bg-neutral-100 py-1 px-2.5 rounded-full text-center border-2 hover:border-blue-600">
              S
            </p>
          </div>
        </div> */}
          <p className="text-md my-5">Brand: {data?.brand}</p>
          <p className="text-md my-5">Weight: {data?.weight}</p>
          <p className="text-sm my-5">{data?.description}</p>
          <ToastDemo open={open} setOpen={setOpen}>
            <div onClick={() => setOpen(true)}>
              <Button
                variant={"outline"}
                className="relative bg-blue-600 text-white w-full py-6 rounded-full text-md font-medium"
                onClick={() => dispath(addProduct(data))}
              >
                Add to Cart
                <PlusIcon className="size-8 text-white absolute left-5" />
              </Button>
            </div>
          </ToastDemo>
        </div>
      </div>
    </div>
  );
}
