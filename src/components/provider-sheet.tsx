import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import BasketCart from "./basket-cart";
import {
  addQuantity,
  deleteProduct,
  deleteQuantity,
} from "@/lib/slices/cartSlice";
import { Product } from "@/lib/interfaces";

export function ProviderSheet({
  cart,
  totalPrice,
  cartTotal,
}: {
  cart: Product[];
  totalPrice: number | string;
  cartTotal: number;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="ml-auto font-ext
        rabold">
          {cartTotal} <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-neutral-200 h-full flex flex-col flex-wrap">
        <SheetHeader className="h-10">
          <SheetTitle>My Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex-1">
          {cart?.map((i: Product, index: number) => (
            <BasketCart
              key={index}
              id={i.id}
              size={i.weight}
              title={i.title}
              price={i.price}
              imgSrc={i.images[0]}
              quantity={i.quantity}
              addQuantity={addQuantity}
              deleteQuantity={deleteQuantity}
              deleteProduct={deleteProduct}
            />
          ))}
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
            <div className="flex justify-between border-b border-neutral-400 w-full text-neutral-500 ">
              <div className="text-sm">Shipping</div>
              <div className="text-md">Calculated at checkout</div>
            </div>
            <div className="flex justify-between border-b border-neutral-400 w-full">
              <div className="text-neutral-500 text-sm">Total</div>
              <div className="text-md">
                {totalPrice.toString().slice(0, 5)} $USD
              </div>
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
