import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Spinner from "./spinner";

export function SelectFilter({ items }: { items: string[] }) {
  const router = useRouter();
  if(!items) {
    return <Spinner />
  }
  return (
    <Select onValueChange={(e) => router.push("/search/" + e)} defaultValue={items[0]}>
      <SelectTrigger className="w-full md:hidden uppercase">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          {items?.map((i: any, index: any) => (
            <SelectItem className="bg-white uppercase" key={index} value={i}>
              {i}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
