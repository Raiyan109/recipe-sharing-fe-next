'use client'
import { createRecipe } from "@/services/RecipeService";
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../UI/form";
import { Input } from "../UI/input";
import TipTap from "../richTextEditor/TipTap";


const CreateRecipe = () => {

    const formSchema = z.object({
        _id: z.string(),
        title: z
            .string()
            .min(5, { message: 'Hey the title is not long enough' })
            .max(100, { message: 'Its too loong' }),
        image: z
            .string(),
        desc: z
            .string()
            .min(5, { message: 'Hey the description is not long enough' })
            .max(100, { message: 'Its too loong' })
            .trim(),
        rating: z
            .string(),
        contentAvailability: z.string()
    })

    // const { register, handleSubmit, formState: { errors } }
    const form = useForm<z.infer<typeof formSchema>>({
        // useForm<IRecipe>
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            image: '',
            title: '',
            desc: '',
            rating: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        const recipeData = {
            ...values,
            contentAvailability: 'free'
        }
        createRecipe(recipeData)
    };

    return (
        <div>
            <div className="rounded-md space-y-10 flex flex-col items-center py-12">
                <h1 className="text-3xl md:text-5xl text-grayText text-center font-bold">Create Recipe</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="title"
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Main title for your recipe" />
                                    </FormControl>
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
                                        <TipTap description={field.name} onChange={field.onChange} />
                                    </FormControl>
                                </FormItem>
                            )}
                        ></FormField>
                    </form>
                </Form>
                {/* <form className="space-y-10 w-96 px-2 lg:px-0" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-x-10 gap-y-5 items-end">
                        <div>
                            <label className="block mb-1 text-sm text-grayText">Image</label>
                            <input
                                type="text"
                                {...register('image', {
                                    required: {
                                        value: true,
                                        message: "Image is required."
                                    }
                                })}
                                className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                            />
                        </div>
                        <div>
                            {errors.image && <p>{errors.image?.message}</p>}
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-grayText">Title</label>
                            <input
                                type="text"
                                {...register('title', {
                                    required: {
                                        value: true,
                                        message: "Title is required."
                                    }, minLength: { value: 5, message: 'This input requires 5 character' }
                                })}
                                className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                            />
                        </div>
                        <div>
                            {errors.title && <p>{errors.title?.message}</p>}
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-grayText">Description</label>
                            <input
                                type="text"
                                {...register('desc', {
                                    required: {
                                        value: true,
                                        message: "Description is required."
                                    }, minLength: { value: 5, message: 'This input requires 5 character' }
                                })}
                                className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                            />
                        </div>
                        <div>
                            {errors.desc && <p>{errors.desc?.message}</p>}
                        </div>
                        <div>
                            <label className="block mb-1 text-sm text-grayText">Rating</label>
                            <input
                                type="number"
                                {...register('rating', {
                                    required: {
                                        value: true,
                                        message: "Rating is required."
                                    }
                                })}
                                className="w-full appearance-none text-primary  placeholder:text-primary  inline-block bg-secondary  px-3 h-9 border border-grayText  rounded-md focus:outline-none focus:bg-neutral-100 "
                            />
                        </div>
                        <div>
                            {errors.rating && <p>{errors.rating?.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="w-full bg-accent hover:bg-primary/80 text-grayText font-medium py-3 px-6 rounded-full ease-in-out duration-100">
                            Create
                        </button>
                    </div>
                </form> */}
            </div>
        </div>
    )
}

export default CreateRecipe