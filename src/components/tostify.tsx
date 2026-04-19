"use client";

import * as Toast from "@radix-ui/react-toast";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function ToastDemo({
  children,
  open,
  setOpen,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <Toast.Provider swipeDirection="right" duration={2800}>
      {children}
      <Toast.Root
        className="ToastRoot"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="ToastTitle flex items-center gap-2">
          <CheckIcon className="size-3.5" style={{ color: "var(--success)" }} />
          Added to cart
        </Toast.Title>
        <Toast.Description className="ToastDescription">
          Item has been added to your cart.
        </Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
}
