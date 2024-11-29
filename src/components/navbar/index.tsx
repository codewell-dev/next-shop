"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Search from "./search";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const menu = [
    {
      id: 1,
      path: "/all",
      title: "All",
    },
    {
      id: 2,
      path: "/shirts",
      title: "Shirts",
    },
    {
      id: 3,
      path: "/stickers",
      title: "Stickers",
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
              {menu.map((item, index) => (
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
          <Button variant={"outline"} className="ml-auto">
            <ShoppingCartIcon />
          </Button>
        </div>
      </nav>
    </header>
  );
}
