import { createRecipe, deleteRecipe, deleteReview, getRecipes } from "@/services/RecipeService";
import { IRecipes } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

// export const useRecipes = () => {
//     return useQuery({
//         queryKey: ["recipes"],
//         queryFn: getRecipes,
//         staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
//     });
// };
export const useRecipes = () => {
    return useQuery<IRecipes>({
        queryKey: ["recipes"],
        queryFn: async () => await getRecipes(), // Explicitly using async/await
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    });
};

export const useDeleteRecipe = () => {
    return useMutation<void, Error, { id: string }>({
        mutationKey: ["DELETE_RECIPE"],
        mutationFn: async ({ id }) => await deleteRecipe(id),
        onSuccess: () => {
            toast.success("Recipe deleted successfully.");
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};

export const useDeleteReview = () => {
    return useMutation<void, Error, { reviewId: string, recipeId: string }>({
        mutationKey: ["DELETE_REVIEW"],
        mutationFn: async ({ reviewId, recipeId }) => await deleteReview(reviewId, recipeId),
        onSuccess: () => {
            toast.success("Review deleted successfully.");
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};


export const useCreateRecipe = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<any, Error, FieldValues>({
        mutationKey: ["CREATE_RECIPE"],
        mutationFn: async (recipeData) => await createRecipe(recipeData),
        onSuccess: () => {
            toast.success("Recipe created successful.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};