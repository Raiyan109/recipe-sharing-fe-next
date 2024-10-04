import { followUser } from "@/services/FollowService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useFollow = () => {
    return useMutation<void, Error, { followeeId: string }>({
        mutationKey: ["FOLLOW"],
        mutationFn: async ({ followeeId }) => await followUser(followeeId),
        onSuccess: () => {
            toast.success("Followed successfully.");
        },
        onError: (error) => {
            // Check if the error response contains a message
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};