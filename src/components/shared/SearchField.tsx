"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useDebounce from "@/hooks/debounce.hook";

export default function SearchField() {
    const { register, handleSubmit, watch } = useForm();
    console.log(useDebounce(watch('search')));

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
                <Input
                    {...register('search')}
                    aria-label='Search'
                    placeholder="Search"
                    className="pe-10"
                />
                <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground" />
            </div>
        </form>
    );
}