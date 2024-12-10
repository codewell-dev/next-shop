"use client";

import { Fragment, Suspense, useState } from "react";
import { Button } from "../ui/button";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import Search, { SearchSkeleton } from "./search";
import Link from "next/link";
import { Menu } from "@/lib/interfaces";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);
  return (
    <div className="mobile-menu">
      <Button variant="outline" className="" onClick={openMobileMenu}>
        <Bars2Icon className="size-4" />
      </Button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={closeMobileMenu} className="">
          <DialogPanel className="w-full space-y-4 border bg-white p-4 absolute top-0 left-0 right-0 bottom-0">
            <div onClick={closeMobileMenu}>
              <div className="mb-4">
                <Button
                  variant={"outline"}
                  className="rounded-md border border-neutral-200 text-black p-3"
                >
                  <XMarkIcon className="size-5" />
                </Button>
              </div>
              <Suspense fallback={<SearchSkeleton />}>
                <Search />
              </Suspense>
              {menu.length && (
                <ul className="text-md mt-4 flex flex-col gap-y-2">
                  {menu.map((item: any) => (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className="text-xl hover:text-neutral-400"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </DialogPanel>
        </Dialog>
      </Transition>
    </div>
  );
}
