/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import TipTap from "../richTextEditor/TipTap"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { createRecipe } from "@/services/RecipeService"
import { useUser } from "@/context/user.provider"
import { useCreateRecipe } from "@/hooks/recipe.hook"

const formSchema = z.object({
    _id: z.string().optional(),
    title: z.string().min(2, {
        message: "title must be at least 2 characters.",
    }),
    image: z
        .string(),
    desc: z
        .string()
        .min(5, { message: 'Hey the description is not long enough' })
        .max(100, { message: 'Its too loong' })
        .trim(),
    category: z
        .string(),
})

const filters = ["Dinner", "Vegetarian", "Breakfast", "Healthy"];

export function CreateRecipe() {
    const { user } = useUser()
    const { mutate: handleCreateRecipe } = useCreateRecipe();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            image: '',
            desc: '',
            category: '',
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        const recipeData = {
            ...values,
            contentAvailability: 'free',
            user: user?._id
        }
        console.log(recipeData);

        // handleCreateRecipe(recipeData)
    }

    return (
        <div>
            <div className="rounded-md space-y-10 py-12">
                <h1 className="text-3xl md:text-5xl text-grayText text-center font-bold">Create Recipe</h1>

                <div className="px-2 md:px-24">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Image" {...field} />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} />

                                        </FormControl>
                                        {/* <FormDescription>
                                            This is your public display name.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="desc"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            {/* <TipTap description={field.name} onChange={field.onChange} inputClass='min-h-[150px]' /> */}
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Select Category</FormLabel>
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Select Category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {filters.map((filter) => (
                                                    <SelectItem key={filter} value={filter}>{filter}</SelectItem>
                                                ))}
                                            </SelectContent>

                                        </Select>

                                    </FormItem>
                                )}
                            />


                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
