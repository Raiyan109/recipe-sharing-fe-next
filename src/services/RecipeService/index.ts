/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";

import { FieldValues } from "react-hook-form";


export const createRecipe = async (recipe: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/recipe", recipe);
        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
        // toast.error(error)
    }
}

export const deleteRecipe = async (id: string) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.delete(`/recipe/${id}`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });


        return data
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
        // toast.error(error)
    }
}

export const deleteReview = async (reviewId: string, recipeId: string) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.delete(`/recipe/${recipeId}/review/${reviewId}`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });


        return data
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
        // toast.error(error)
    }
}

export const getRecipes = async () => {
    try {
        const { data } = await axiosInstance.get(`/recipe`);

        return data
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
        // toast.error(error)
    }
}

export const getLatestRecipes = async () => {
    try {
        const { data } = await axiosInstance.get(`/recipe/latest`);

        return data
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
        // toast.error(error)
    }
}

export const getSingleRecipe = async (id: string) => {
    try {
        const { data } = await axiosInstance.get(`/recipe/${id}`);

        return data
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
        // toast.error(error)
    }
}



export const getRecipesOfUser = async (query: string = "", page: number = 1) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.get("/recipe/user", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            },
            params: {
                query,
                page,
                limit: 2, // You can adjust this limit as needed
            },
        });
        return data
    } catch (error: any) {

        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
        // toast.error(error)
    }
}