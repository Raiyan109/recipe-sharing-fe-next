'use server'

import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";

export const upvote = async (recipeId: string) => {
    const accessToken = cookies().get('accessToken')?.value

    if (!accessToken) {
        console.log('Access Token is missing')
    }

    try {
        const { data } = await axiosInstance.put(`/recipe/${recipeId}/upvote`, {}, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
    }
}

export const downvote = async (recipeId: string) => {
    const accessToken = cookies().get('accessToken')?.value

    if (!accessToken) {
        console.log('Access Token is missing')
    }

    try {
        const { data } = await axiosInstance.put(`/recipe/${recipeId}/downvote`, {}, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
    }
}