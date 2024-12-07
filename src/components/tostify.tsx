import React from "react";
import * as Toast from "@radix-ui/react-toast";
import { FaceSmileIcon, XMarkIcon } from "@heroicons/react/24/outline";

const ToastDemo = ({ children, open, setOpen }: any) => {
  return (
    <Toast.Provider swipeDirection="right">
      {children}

      <Toast.Root
        className="ToastRoot"
        open={open}
        onOpenChange={setOpen}
        duration={2000}
      >
        <XMarkIcon className="size-5 ml-auto" />
        <Toast.Title className="ToastTitle flex items-center gap-2">
          Your product add basket{" "}
          <FaceSmileIcon className="text-yellow-500 size-5" />
        </Toast.Title>
        <Toast.Description asChild>
          <p className="text-neutral-500">Thank you :)</p>
        </Toast.Description>
        <Toast.Action
          className="ToastAction"
          asChild
          altText="Goto schedule to undo"
        ></Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default ToastDemo;
