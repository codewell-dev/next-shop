import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";
import Form from "next/form";

export default function Search() {
  return (
    <Form
      action="/search"
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <Input className="w-full rounded-lg px-4 py-4 text-black text-md" placeholder="Search for products..." />
      <MagnifyingGlassIcon className="size-4 absolute top-2.5 right-2.5 text-neutral-500" />
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <Input className="w-full rounded-lg px-4 py-4 text-black text-md" placeholder="Search for products..." />
      <MagnifyingGlassIcon className="size-4 absolute top-2.5 right-2.5 text-neutral-500" />
    </form>
  );
}
