import { downvote, upvote } from "@/services/VoteService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpvote = () => {
    const queryClient = useQueryClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<void, Error, { recipeId: string }>({
        mutationKey: ["UPVOTE"],
        mutationFn: async ({ recipeId }) => await upvote(recipeId),
        // onSuccess: () => {
        //     toast.success("UpVoted successfully.");
        // },
        onSuccess: (_, { recipeId }) => {
            toast.success("Upvoted successfully.");
            // Invalidate queries to refetch updated data
            queryClient.invalidateQueries({ queryKey: ["recipes"] });
            queryClient.invalidateQueries({ queryKey: ["recipe", recipeId] }); // Invalidate specific recipe details
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};

export const useDownvote = () => {
    const queryClient = useQueryClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<void, Error, { recipeId: string }>({
        mutationKey: ["DOWNVOTE"],
        mutationFn: async ({ recipeId }) => await downvote(recipeId),
        // onSuccess: () => {
        //     toast.success("Downvoted successfully.");
        // },
        onSuccess: (_, { recipeId }) => {
            toast.success("Downvoted successfully.");
            queryClient.invalidateQueries({ queryKey: ["recipes"] });
            queryClient.invalidateQueries({ queryKey: ["recipe", recipeId] });
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};