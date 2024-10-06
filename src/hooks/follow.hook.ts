import { followUser, getFollowees, unfollowUser } from "@/services/FollowService";
import { useMutation, useQuery } from "@tanstack/react-query";
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

export const useUnfollow = () => {
    return useMutation<void, Error, { followeeId: string }>({
        mutationKey: ["UNFOLLOW"],
        mutationFn: async ({ followeeId }) => await unfollowUser(followeeId),
        onSuccess: () => {
            toast.success("Unfollowed successfully.");
        },
        onError: (error) => {
            const errorMessage = error.message || 'An unexpected error occurred.';
            toast.error(errorMessage);
        },
    });
};

export const useGetFollowees = (id: string) => {
    return useQuery({
        queryKey: ["FOLLOWEES", id],
        queryFn: () => getFollowees(id), // No arguments are passed directly to queryFn
        staleTime: 1000, // Keep data fresh for 5 minutes
        enabled: !!id, // Only run the query if `id` is defined
    });
};