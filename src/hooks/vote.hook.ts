import { downvote, upvote } from "@/services/VoteService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpvote = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<void, Error, { recipeId: string }>({
        mutationKey: ["UPVOTE"],
        mutationFn: async ({ recipeId }) => await upvote(recipeId),
        onSuccess: () => {
            toast.success("UpVoted successfully.");
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};

export const useDownvote = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useMutation<void, Error, { recipeId: string }>({
        mutationKey: ["DOWNVOTE"],
        mutationFn: async ({ recipeId }) => await downvote(recipeId),
        onSuccess: () => {
            toast.success("Downvoted successfully.");
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};