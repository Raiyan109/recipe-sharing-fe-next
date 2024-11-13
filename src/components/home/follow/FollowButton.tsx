"use client";

import { useFollow, useUnfollow } from "@/hooks/follow.hook";
import { IUser } from "@/types";
import { Check } from "lucide-react";

type IProps = {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUser[];
};

const FollowButton = ({
  userId,
  followees,
}: {
  userId: string;
  followees: IProps;
}) => {
  // const { data } = useGetFollowees(userId);
  // console.log(data);

  const followeesId = followees?.data?.map((f) => f?._id);
  const isFollowing = followeesId?.includes(userId);

  const { mutate: handleFollow } = useFollow();
  const { mutate: handleUnFollow } = useUnfollow();

  const handleFollowUser = () => {
    handleFollow({ followeeId: userId });
  };

  const handleUnFollowUser = () => {
    handleUnFollow({ followeeId: userId });
  };

  return (
    <div>
      <button
        className={`px-3 py-2 w-20 text-sm font-medium ${isFollowing
          ? "bg-destructive hover:bg-destructive/80"
          : "bg-primary hover:bg-primary/80"
          } text-black dark:text-white hover:bg-blue-100 rounded-md transition duration-150 ease-in-out `}
        onClick={isFollowing ? handleUnFollowUser : handleFollowUser}
      >
        {isFollowing ? (
          <div className="flex items-center gap-2">
            <p>Following</p>
            <Check size={10} />
          </div>
        ) : (
          "Follow"
        )}
      </button>
    </div>
  );
};

export default FollowButton;
