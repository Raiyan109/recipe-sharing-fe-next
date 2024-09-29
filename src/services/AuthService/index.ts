'use server'

import axiosInstance from "@/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form"


export const registerUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/signup", userData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(error)
    }
}

export const loginUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/login", userData);


        if (data.success) {
            cookies().set('accessToken', data?.token)
        }


        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    const accessToken = cookies().get('accessToken')?.value

    let decodedToken = null

    if (accessToken) {
        decodedToken = await jwtDecode(accessToken)
        return {
            _id: decodedToken._id,
            name: decodedToken.name,
            email: decodedToken.email,
            password: decodedToken.password,
            phone: decodedToken.phone,
            role: decodedToken.role,
            address: decodedToken.address,
            photo: decodedToken.photo,
            membership: decodedToken.membership,
            followers: decodedToken.followers,
        }
    }

    return decodedToken

}