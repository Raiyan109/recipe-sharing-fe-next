/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { Input } from "../ui/input";

interface iDefault {
  defaultValue: string | null;
}

export const SearchInput = ({ defaultValue }: iDefault) => {
  // initiate the router from next/navigation
  const router = useRouter();
  // We need to grab the current search parameters and use it as default value for the search input
  const [inputValue, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const handleSearch = () => {
    if (inputValue) return router.push(`/search?q=${inputValue}`);
    if (!inputValue) return router.push("/");
  };

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return handleSearch();
  };

  return (
    <div className="">
      <Input
        type="text"
        id="inputId"
        placeholder="Type & press enter"
        value={inputValue ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="bg-[transparent] w-28 md:w-full py-4 pl-2 pr-3"
      />
    </div>
  );
};
