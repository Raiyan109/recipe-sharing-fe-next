'use server'
import envConfig from "@/config/envConfig";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: envConfig.baseApi,
    // headers: {
    //     "Authorization": `Bearer ${accessToken}`
    // }

});

export default axiosInstance;