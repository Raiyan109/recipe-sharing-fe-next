'use server'

import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form"

export const registerUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/signup", userData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(error)
    }
}