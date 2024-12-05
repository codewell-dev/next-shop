import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  MinusCircleIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import GridTileImage from "./grid/grid-tile-images";
import { useState } from "react";

export function ProviderSheet({ children }: any) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="ml-auto">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-neutral-200 h-full flex flex-col flex-wrap">
          <SheetHeader className="h-10">
            <SheetTitle>My Cart</SheetTitle>
          </SheetHeader>
          <div className="mt-4 flex-1">
            {children}
          </div>

          <SheetFooter className="h-40">
            {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
            <div className="flex flex-col flex-wrap w-full h-52 mt-auto gap-3">
              <div className="flex justify-between border-b border-neutral-400 w-full">
                <div className="text-neutral-500 text-sm">Taxes</div>
                <div className="text-md">0,00 $USD</div>
              </div>
              <div className="flex justify-between border-b border-neutral-400 w-full">
                <div className="text-neutral-500 text-sm">Taxes</div>
                <div className="text-md">0,00 $USD</div>
              </div>
              <div className="flex justify-between border-b border-neutral-400 w-full">
                <div className="text-neutral-500 text-sm">Taxes</div>
                <div className="text-md">0,00 $USD</div>
              </div>
              <Button
                variant={"outline"}
                className="relative bg-blue-600 text-white w-full py-5 rounded-full text-sm font-medium mt-4"
              >
                Proceed to Checkout
              </Button>
            </div>
          </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
