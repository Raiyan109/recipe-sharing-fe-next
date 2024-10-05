/* eslint-disable @typescript-eslint/no-explicit-any */
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
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }

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
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }

    }
}

export const getAllUsers = async () => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.get("/auth", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        return data
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }

    }
}

export const getAnUser = async () => {
    const accessToken = cookies().get('accessToken')?.value
    console.log(accessToken, 'accessToken from getAnUser');

    try {
        const { data } = await axiosInstance.get("/auth/user", {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        return data
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }

    }
}

export const getSingleUser = async (id: string) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.get(
            `/auth/${id}`, // Pass the isBlocked field in the body
            {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
            }
        );
        console.log(data, 'from getSingleUser');

        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }

    }
}

export const updateUserIsBlocked = async (id: string, isBlocked: boolean) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.put(
            `/auth/${id}`,
            { isBlocked }, // Pass the isBlocked field in the body
            {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
            }
        );

        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }

    }
}

export const updateProfile = async (id: string, payload: Record<string, any>) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.put(
            `/auth/updateProfile/${id}`,
            payload,
            {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
            }
        );
        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }

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
            isBlocked: decodedToken.userId.isBlocked || false,
        }
    }

    return decodedToken

}

export const forgetPassword = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/auth/forget-password", userData);

        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }

    }
}

export const resetPassword = async (userData: FieldValues) => {
    const accessToken = cookies().get('accessToken')?.value

    // const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.post("/auth/reset-password", userData, {
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