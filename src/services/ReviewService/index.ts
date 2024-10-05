'use server'
import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const createReview = async (recipeId: string, review: FieldValues) => {
    const accessToken = cookies().get('accessToken')?.value

    if (!accessToken) {
        console.log('Access Token is missing')
    }

    try {
        const { data } = await axiosInstance.post(`/recipe/${recipeId}/review`, review, {
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