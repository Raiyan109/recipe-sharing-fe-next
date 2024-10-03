import { deleteRecipe } from "@/services/RecipeService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

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