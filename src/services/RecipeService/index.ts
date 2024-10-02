/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";

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

export const getRecipesOfUser = async () => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.get("/recipe/user", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        if (!data) {
            return null
        }
        console.log(data);

        return data
    } catch (error: any) {
        throw new Error(error)
    }
}