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
import { Router } from "lucide-react";

export function SelectFilter({ items }: { items: string[] }) {
    const searchParams = useSearchParams();
    const pathname = usePathname()
    const router = useRouter()

    const createQueryString = React.useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
  return (
    <Select defaultValue={items[0]} onValueChange={e => router.push(pathname + '?' + createQueryString('category', e))}>
      <SelectTrigger className="w-full py-2 md:hidden mt-5">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          {items?.map((i: any, index: any) => (
            <SelectItem className="bg-white" key={index} value={i}>
              {i}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
