"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { IRecipe, IRecipes } from "@/types";
import { useState } from "react";


export default function SearchField({ recipes }: { recipes: IRecipes }) {
    const [query, setQuery] = useState('');

    const { register, handleSubmit } = useForm();

    // Our search filter function
    const searchFilter = (array: IRecipe[]) => {
        return array.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()));
    };

    // Applying the search filter function to the array of recipes received from the API
    const filtered = searchFilter(recipes.data);

    // Handling form submission
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setQuery(data.search);  // Set query based on form data
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
                <Input
                    {...register('search', {
                        onChange: (e) => {
                            setQuery(e.target.value)
                        },
                    })}
                    aria-label='Search'
                    placeholder="Search"
                    className="pe-10"
                />

                <div className="">
                    {/* Show filtered results only if there's a query */}
                    {query && (
                        <div className="mt-3 space-y-3 absolute bg-white/20 top-12 z-20 backdrop-blur-sm w-96">
                            {filtered?.length > 0 ? (
                                filtered?.map((recipe) => (
                                    <div
                                        key={recipe._id}
                                        className="  font-bold cursor-pointer rounded-2xl px-3 py-3 text-lg w-56"
                                    >
                                        <h1 className="">{recipe.title}</h1>
                                    </div>
                                ))
                            ) : (
                                <div>No results found</div>
                            )}
                        </div>
                    )}
                </div>
                <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground" />
            </div>
        </form>
    );
}