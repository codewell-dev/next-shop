import { useAppDispatch } from "@/lib/hooks";
import { priceCounts } from "@/lib/utils";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function BasketCart({
  title,
  price,
  quantity,
  imgSrc,
  size,
  id,
  addQuantity,
  deleteQuantity,
  deleteProduct,
}: {
  title: string;
  price: number;
  quantity: number | undefined;
  imgSrc: string;
  size: number;
  id: number;
  addQuantity: any;
  deleteQuantity: any;
  deleteProduct: any;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between mt-3 border-b border-neutral-400 py-3">
      <div className="flex">
        <div className="relative max-w-20 max-h-16 w-full h-full bg-neutral-300 rounded-xl">
          <img src={imgSrc} className="w-full h-full object-contain" />
          <XMarkIcon
            className="w-6 h-6 absolute p-1 rounded-xl -top-2 -left-2 bg-neutral-400 cursor-pointer"
            onClick={() => dispatch(deleteProduct(id))}
          />
        </div>
        <div className="text-sm flex flex-col flex-wrap mx-3">
          <p>{title}</p>
          <p className="text-neutral-400">{size}</p>
        </div>
      </div>

      <div className="flex flex-col min-w-20 text-sm">
        <p>{priceCounts(quantity, price)} USD</p>
        <div className="w-full flex justify-between items-center rounded-full border border-neutral-300 text-black px-2 py-1 text-md mt-2">
          <div className="cursor-pointer">
            <MinusIcon
              className="size-3"
              onClick={() => dispatch(deleteQuantity(id))}
            />
          </div>
          <div>{quantity}</div>
          <div className="cursor-pointer">
            <PlusIcon
              className="size-3"
              onClick={() => dispatch(addQuantity(id))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
