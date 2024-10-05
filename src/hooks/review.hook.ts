import { createReview } from "@/services/ReviewService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateReview = () => {
    return useMutation<void, Error, { recipeId: string, review: FieldValues }>({
        mutationKey: ["CREATE_REVIEW"],
        mutationFn: async ({ recipeId, review }) => await createReview(recipeId, review),
        onSuccess: () => {
            toast.success("Review created successfully.");
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};