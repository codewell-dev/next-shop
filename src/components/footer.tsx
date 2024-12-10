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
    { id: 5, title: "FAQ", path: "/faq" },
  ];
  return (
    <div className="footer">
      <div className="footer-top mx-auto max-w-screen-2xl flex flex-col flex-wrap md:justify-between md:flex-row my-10 p-4 lg:px-6">
        <div className="flex flex-col md:flex-row ">
          <div className="flex gap-2 mr-10 items-center md:items-start">
            <Link href={"/"} className="flex">
              <div className="rounded-md border border-neutral-300 p-1.5 md:p-0.5 md:w-5 md:h-5 w-8 h-8 flex items-center justify-center">
                <img src={"../logo.svg"} alt="logo" className="w-full h-full" />
              </div>
            </Link>
            <h6 className="md:text-sm text-md font-medium block">ACME STORE</h6>
          </div>
          <ul className="mt-4 md:mt-0">
            {menu.map((i) => (
              <li
                key={i.id}
                className="mb-1.5 text-neutral-400 md:text-sm text-md border-b w-fit border-white hover:border-neutral-400"
              >
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
      <div className="footer-down">
        <div className="footer-line h-0.5 bg-neutral-300 w-full mb-2" />
        <div className="footer-container mx-auto max-w-screen-2xl flex my-5 p-4 lg:px-6">
          <div className="flex justify-between flex-wrap w-full">
            <div className="flex">
              <p className="text-neutral-400 text-sm">
                © 2023-2024 ACME, Inc. All rights reserved.
              </p>
              <div className="h-5 w-0.5 bg-neutral-300 mx-5" />
              <p className="text-neutral-400 text-sm">View the source</p>
            </div>

            <p className="text-sm block">Created by ▲ Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
