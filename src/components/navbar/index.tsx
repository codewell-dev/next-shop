"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Search from "./search";
import MobileMenu from "./mobile-menu";
import { ProviderSheet } from "../provider-sheet";
import BasketCart from "../basket-cart";
import { useAppSelector } from "@/lib/hooks";
import { useDispatch } from "react-redux";
import { getAllData } from "@/lib/slices/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllData())
  }, []);
  const menu = [
    {
      id: 1,
      quantity: 2,
      path: "/search",
      title: "All",
    },
    {
      id: 2,
      quantity: 2,
      path: "/shirts",
      title: "Shirts",
    },
    {
      id: 3,
      quantity: 2,
      path: "/stickers",
      title: "Stickers",
    },
  ];
  const cart = useAppSelector((state) => state.cart);
  let totalPrice =
    cart.length > 0
      ? cart.reduce((a, b: any) => a + b.price * b.quantity, 0)
      : '0,00';

  const data = [
    {
      id: 1,
      title: "Acme Circles T-Shirt",
      path: "../main-shirt.svg",
      price: "$20.00",
      count: 1,
      size: "M",
    },
    {
      id: 2,
      title: "Acme Drawstring Bag",
      path: "../main-bag.svg",
      price: "$12.00",
      count: 1,
      size: "M",
    },
    {
      id: 3,
      title: "Acme Cup",
      path: "../main-cup.svg",
      price: "$15.00",
      count: 1,
      size: "M",
    },
  ];
  return (
    <header className="">
      <nav
        aria-label="Global"
        className="relative flex items-center justify-between w-full p-4 lg:px-6"
      >
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex items-center gap-3 md:w-1/3">
          <Link href={"/"} className="flex items-center gap-3">
            <Button variant={"outline"} className="rounded-md p-3">
              <Image src={"../logo.svg"} alt="logo" width={15} height={20} />
            </Button>
            <div className="text-sm font-bold uppercase ml-auto md:hidden lg:block md:ml-0">
              ACME STORE
            </div>
          </Link>
          {menu.length ? (
            <ul className="text-sm gap-6 hidden justify-center md:flex md:items-center">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 border-b-2 border-transparent hover:border-neutral-500"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden relative md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex md:w-1/3">
          <ProviderSheet cart={cart} totalPrice={totalPrice} cartTotal={cart.length} />
        </div>
      </nav>
    </header>
  );
}
