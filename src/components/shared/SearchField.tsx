"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useDebounce from "@/hooks/debounce.hook";
import { IRecipe, IRecipes } from "@/types";
import { useState } from "react";
import Link from "next/link";

export default function SearchField({ recipes }: { recipes: IRecipes }) {
    const [query, setQuery] = useState('');
    //Our search filter function
    const searchFilter = (array: IRecipe[]) => {
        return array.filter(
            (el) => el.title.toLowerCase().includes(query)
        )
    }

    //Applying our search filter function to our array of countries recieved from the API
    const filtered = searchFilter(recipes.data)
    console.log(filtered);


    //Handling the input on our search bar
    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query);
    }


    // const { register, handleSubmit, watch } = useForm();


    // const onSubmit: SubmitHandler<FieldValues> = (data) => {
    //     setQuery(data)
    //     console.log(query);

    // };

    return (
        <form >
            <div className="relative">
                {/* <Input
                    {...register('search')}
                    aria-label='Search'
                    placeholder="Search"
                    className="pe-10"
                /> */}
                <input type="text" placeholder="Type here"
                    onChange={handleChange}
                    className="input input-bordered input-primary w-full max-w-xs" />
                <div className="">
                    {
                        query &&
                        <div className="   space-y-3">
                            {
                                query && filtered.map((recipe) => (
                                    <div key={recipe._id} className="border border-primary/75 hover:border-primary hover:bg-secondary hover:text-neutral font-bold cursor-pointer  rounded-2xl px-3 py-3 text-lg">
                                        <h1 className="">{recipe.title}</h1>
                                        {/* <Link href={`recipeDetails/${recipe?._id}`}><button className="btn btn-xs btn-primary">Details</button></Link> */}
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
                <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground" />
            </div>
        </form>
    );
}