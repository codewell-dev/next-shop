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
      <div className="footer-top mx-auto max-w-screen-2xl flex justify-between my-10 p-4 lg:px-6">
        <div className="flex">
          <div className="flex gap-2 mr-10">
            <Link href={"/"} className="flex">
              <div className="rounded-md border border-neutral-300  h-5 w-5 flex items-center justify-center">
                <img src={"../logo.svg"} alt="logo" className="w-3 h-3" />
              </div>
            </Link>
            <h6 className="text-sm font-medium block">ACME STORE</h6>
          </div>
          <ul>
            {menu.map((i) => (
              <li
                key={i.id}
                className="mb-4 text-neutral-400 text-sm border-b w-fit border-white hover:border-neutral-400"
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
          <div className="flex justify-between w-full">
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
