/* eslint-disable @typescript-eslint/no-explicit-any */
import { forgetPassword, loginUser, registerUser, resetPassword, updateProfile, updateUserIsBlocked } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn: async (userData) => await registerUser(userData),
        onSuccess: () => {
            toast.success("User registration successful.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export const useUserLogin = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["USER_LOGIN"],
        mutationFn: async (userData) => await loginUser(userData),
        onSuccess: () => {
            toast.success("User logged in successfully.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export const useForgetPassword = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["FORGET_PASSWORD"],
        mutationFn: async (userData) => await forgetPassword(userData),
        onSuccess: () => {
            toast.success("Reset link sent to your email successfully.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export const useResetPassword = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["RESET_PASSWORD"],
        mutationFn: async (userData) => await resetPassword(userData),
        onSuccess: () => {
            toast.success("Password reset successfully.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export const useUpdateUserIsBlocked = () => {
    return useMutation<void, Error, { id: string; isBlocked: boolean }>({
        mutationKey: ["UPDATE_USER_ISBLOCKED"],
        mutationFn: async ({ id, isBlocked }) => await updateUserIsBlocked(id, isBlocked),
        onSuccess: () => {
            toast.success("User status updated successfully.");
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};

export const useUpdateProfile = () => {
    return useMutation<void, Error, { id: string; payload: Record<string, any> }>({
        mutationKey: ["UPDATE_PROFILE"],
        mutationFn: async ({ id, payload }) => await updateProfile(id, payload),
        onSuccess: () => {
            toast.success("Profile updated successfully.");
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};