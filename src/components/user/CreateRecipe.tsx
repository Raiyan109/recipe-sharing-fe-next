/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState, useMemo } from 'react';
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { useCreateRecipe } from '@/hooks/recipe.hook';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { IUser } from '@/types';


const filters = ["Dinner", "Vegetarian", "Breakfast", "Healthy"];

type IProps = {
    success: boolean;
    statusCode: number;
    message: string;
    data: IUser;
}

export function CreateRecipe({ user }: { user: IProps }) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const { mutate: handleCreateRecipe } = useCreateRecipe();

    // Load ReactQuill dynamically to avoid SSR issues
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
    const toolbarOptions = [['bold', 'italic', 'underline', 'strike']]; // Define toolbar options

    const modules = { toolbar: toolbarOptions };

    const handleCreateRecipeSubmit = () => {
        const recipeData = {
            title,
            image,
            desc: description,
            category,
            contentAvailability: 'free',
            user: user?.data?._id
        };
        handleCreateRecipe(recipeData);
    };

    return (
        <div>
            <div className="rounded-md space-y-10 py-12">
                <h1 className="text-3xl md:text-5xl text-grayText text-center font-bold">Create Recipe</h1>
                <div className="px-2 md:px-24 space-y-8">
                    {/* Image Input */}
                    <div>
                        <label className="block font-semibold text-gray-700">Image</label>
                        <Input
                            placeholder="Image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>

                    {/* Title Input */}
                    <div>
                        <label className="block font-semibold text-gray-700">Title</label>
                        <Input
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* Description Editor */}
                    <div>
                        <label className="block font-semibold text-gray-700">Description</label>
                        <ReactQuill
                            value={description}
                            onChange={setDescription}
                            modules={modules}
                            theme="snow"
                        />
                    </div>

                    {/* Category Selector */}
                    <div>
                        <label className="block font-semibold text-gray-700">Select Category</label>
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {filters.map((filter) => (
                                    <SelectItem key={filter} value={filter}>{filter}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Submit Button */}
                    <Button type="button" onClick={handleCreateRecipeSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateRecipe;
