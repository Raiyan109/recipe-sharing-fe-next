/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const createRecipe = async (recipe: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/recipe", recipe);
        console.log(data);
        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getRecipes = async () => {
    try {
        const { data } = await axiosInstance.get("/recipe");

        return data
    } catch (error: any) {
        throw new Error(error)
    }
}