/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";

export const createPayment = async (recipe: string, payableAmount: number) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.post(`/payment/${recipe}`, { payableAmount }, {
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