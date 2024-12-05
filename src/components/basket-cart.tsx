import { useAppDispatch } from "@/lib/hooks";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function BasketCart({ title, price, count, imgSrc, size, id, addQuantity, deleteQuantity, deleteProduct }: any) {
  const [counter, setCounter] = useState<any>(count | 1);
  const plusCount = () => setCounter(count + 1);
  const minusCount = () => setCounter(count - 1);
  const dispatch = useAppDispatch()
  return (
    <div className="flex justify-between mt-3">
      <div className="flex">
        <div className="relative w-20 h-16 bg-neutral-300 rounded-xl">
          <img src={imgSrc} className="w-full h-full" />
          <XMarkIcon className="w-6 h-6 absolute p-1 rounded-xl -top-2 -left-2 bg-neutral-400" onClick={() => dispatch(deleteProduct(id))} />
        </div>
        <div className="text-sm flex flex-col flex-wrap mx-3">
          <p>{title}</p>
          <p className="text-neutral-400">{size}</p>
        </div>
      </div>

      <div className="flex flex-col w-20 text-sm">
        <p>{price} USD</p>
        <div className="w-full flex justify-between items-center rounded-full border border-neutral-300 text-black px-2 py-1 text-md mt-2">
          <div className="cursor-pointer">
            <MinusIcon className="size-3" onClick={() => dispatch(deleteQuantity(id))} />
          </div>
          <div>{count}</div>
          <div className="cursor-pointer">
            <PlusIcon className="size-3" onClick={() => dispatch(addQuantity(id))} />
          </div>
        </div>
      </div>
    </div>
  );
}
