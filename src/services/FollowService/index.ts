import axiosInstance from "@/lib/AxiosInstance";

export const followUser = async (followeeId: string) => {
    try {
        const { data } = await axiosInstance.post(`follow/${followeeId}`);
        return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return { data: [] };
        }
    }
}