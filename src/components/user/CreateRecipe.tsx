/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useMemo } from 'react';
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import { useCreateRecipe } from '@/hooks/recipe.hook';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { IUser } from '@/types';
import { Trash2 } from 'lucide-react';
import './createRecipe.css'
import UploadImages from './uploadImages/UploadImages';


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
    const [ingredients, setIngredients] = useState(['']);

    const { mutate: handleCreateRecipe } = useCreateRecipe();

    // Load ReactQuill dynamically to avoid SSR issues
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
    const toolbarOptions = [['bold', 'italic', 'underline', 'strike']];
    const modules = { toolbar: toolbarOptions };

    // Ingredients function
    const handleIngredientChange = (index: number, value: string) => {
        const newIngredients = [...ingredients]
        newIngredients[index] = value
        setIngredients(newIngredients)
    }
    const addIngredientField = () => setIngredients([...ingredients, ''])
    const removeIngredientField = (index: number) => setIngredients(ingredients.filter((_, i) => i !== index))

    // Recipe form handling function
    const handleCreateRecipeSubmit = () => {
        const recipeData = {
            title,
            image,
            desc: description,
            category,
            ingredients,
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
                        <label className="block font-semibold text-gray-700 dark:text-gray-300">Image</label>
                        <UploadImages setImage={setImage} />
                        {/* <Input
                            placeholder="Image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        /> */}
                    </div>

                    {/* Title Input */}
                    <div>
                        <label className="block font-semibold text-gray-700 dark:text-gray-300">Title</label>
                        <Input
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* Description Editor */}
                    <div>
                        <label className="block font-semibold text-gray-700 dark:text-gray-300">Description</label>
                        <ReactQuill
                            value={description}
                            onChange={setDescription}
                            modules={modules}
                            theme="snow"
                        />
                    </div>

                    {/* Category Selector */}
                    <div>
                        <label className="block font-semibold text-gray-700 dark:text-gray-300">Select Category</label>
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

                    {/* Ingredients */}
                    <div className='relative'>
                        <label className="block font-semibold text-gray-700 dark:text-gray-300">Add Ingredients</label>
                        <div className='space-y-2'>
                            {ingredients.map((ingredient, i) => (
                                <div key={i} className='flex items-center gap-2'>
                                    <Input
                                        placeholder="Add an ingredient"
                                        value={ingredient}
                                        onChange={(e) => handleIngredientChange(i, e.target.value)}
                                    />
                                    <Button type='button' className='bg-primary dark:bg-primary hover:bg-primary/80' onClick={() => removeIngredientField(i)}><Trash2 size={17} /></Button>
                                </div>
                            ))}
                        </div>
                        <Button className='bg-primary dark:bg-primary hover:bg-primary/80 mt-2' type="button" onClick={addIngredientField}>Add Ingredient</Button>
                    </div>

                    {/* Submit Button */}
                    <Button type="button" className='bg-primary dark:bg-primary hover:bg-primary/80' onClick={handleCreateRecipeSubmit}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateRecipe;
