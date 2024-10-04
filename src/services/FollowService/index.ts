/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import axiosInstance from "@/lib/AxiosInstance";
import { cookies } from "next/headers";

export const followUser = async (followeeId: string) => {
    const accessToken = cookies().get('accessToken')?.value

    if (!accessToken) {
        console.log('Access Token is missing')
    }

    try {
        const { data } = await axiosInstance.post(`/follow/${followeeId}`, {}, {
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

export const unfollowUser = async (followeeId: string) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.delete(`/follow/unFollow/${followeeId}`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return data;
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        } else {
            throw new Error(error?.response?.data?.message || "An error occurred");
        }
    }
};

export const getFollowers = async (id: string) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.get(`/follow/${id}/followers`, {
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

export const getFollowees = async (id: string) => {
    const accessToken = cookies().get('accessToken')?.value
    try {
        const { data } = await axiosInstance.get(`/follow/${id}/following`, {
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