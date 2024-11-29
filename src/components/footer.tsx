import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";

export function Footer() {
  const menu = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Terms & Conditions", path: "/terms" },
    { id: 4, title: "Privacy Policyy", path: "/privacy" },
    { id: 4, title: "FAQ", path: "/faq" },
  ];
  return (
    <div className="mx-auto max-w-screen-2xl flex justify-between mt-10">
      <div className="flex">
        <div className="flex gap-3 mr-14">
          <Link href={"/"} className="flex">
            <div className="rounded-md border border-neutral-400  h-8 w-8 flex items-center justify-center">
              <img src={"../logo.svg"} alt="logo" className="w-5 h-5" />
            </div>
          </Link>
          <h6 className="text-sm font-medium block">ACME STORE</h6>
        </div>
        <ul>
          {menu.map((i) => (
            <li className="mb-4 text-neutral-400 text-sm border-b border-none hover:border-neutral-400">
              <Link href={i.path}>{i.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <Button variant={"outline"}>
          <ExclamationTriangleIcon className="rounded-lg size-5" />
        </Button>
        <Button variant={"outline"}>
          <p className="text-sm">Deploy</p>
        </Button>
      </div>
    </div>
  );
}
