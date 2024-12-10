"use client";
import Gallery from "@/components/gallery";
import Spinner from "@/components/spinner";
import ToastDemo from "@/components/tostify";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/hooks";
import { Product } from "@/lib/interfaces";
import { useGetProductByIdQuery } from "@/lib/products";
import { addProduct } from "@/lib/slices/cartSlice";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductPage() {
  const [open, setOpen] = useState<boolean>(false);
  const id = useParams<{ handle: string }>();
  const dispath = useAppDispatch();
  const { data, isLoading } = useGetProductByIdQuery<{
    data: Product;
    error: string;
    isLoading: boolean;
  }>(id.handle);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-full p-4 lg:px-6 ">
      <div className="mx-auto max-w-screen-2xl flex flex-col md:flex-row shadow-lg border bg-white gap-4">
        <Gallery item={data} />
        <div className="md:w-1/2 h-[800px] p-5">
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
                className="relative bg-blue-600 text-white w-full py-8 rounded-full text-md font-medium"
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
