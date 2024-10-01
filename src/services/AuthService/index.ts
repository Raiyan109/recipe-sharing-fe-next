'use server'

import axiosInstance from "@/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form"


export const registerUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/signup", userData);

        if (data.success) {
            cookies().set('accessToken', data?.token)
        }

        return data
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

export const logout = () => {
    cookies().delete('accessToken')

}

export const getCurrentUser = async () => {
    const accessToken = cookies().get('accessToken')?.value

    let decodedToken = null

    if (accessToken) {
        decodedToken = await jwtDecode(accessToken)
        return {
            _id: decodedToken.userId._id,
            name: decodedToken.userId.name,
            email: decodedToken.userId.email,
            password: decodedToken.userId.password,
            phone: decodedToken.userId.phone,
            role: decodedToken.userId.role,
            address: decodedToken.userId.address,
            photo: decodedToken.userId.photo,
            membership: decodedToken.userId.membership,
            followers: decodedToken.userId.followers,
        }
    }

    return decodedToken

}