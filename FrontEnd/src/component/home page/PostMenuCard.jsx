import { useMutation, useQueryClient } from "@tanstack/react-query";

const PostMenu = ({
  setShowPostMenuCard,
  selectedPostData,
  setShowPostCard,
  postDetail,
  user,
}) => {
  const queryClient = useQueryClient();

  const handleFollow = useMutation({
    mutationFn: async (id) => {
      const res = await follow(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["user"], (oldUser) => {
        return {
          ...oldUser,
          user: {
            ...oldUser?.user,
            following: [...oldUser?.user?.following, postDetail?.postedBy?._id],
          },
        };
      });
    },
    onError(error) {
      return error.message;
    },
  });

  const handleUnFollow = useMutation({
    mutationFn: async (id) => {
      const res = await unFollow(id);
      return res;
    },
    onMutate() {
      queryClient.setQueryData(["user"], (oldUser) => {
        return {
          ...oldUser,
          user: {
            ...oldUser?.user,
            following: oldUser?.user?.following?.filter(
              (e) => e !== postDetail?.postedBy?._id,
            ),
          },
        };
      });
    },
    onError(error) {
      return error.message;
    },
  });

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/70 ">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <div>
            {user?.following?.includes(postDetail?.postedBy?._id) === true && (
              <button
                onClick={() => {
                  setShowPostMenuCard(false);
                  setShowPostCard(false);
                  handleUnFollow.mutate(postDetail?.postedBy?._id);
                }}
                className="border border-b-0 border-gray-600 bg-gray-950 text-red-500 w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
              >
                Unfollow
              </button>
            )}
            {user?.following?.includes(postDetail?.postedBy?._id) === false && (
              <button
                onClick={() => {
                  setShowPostMenuCard(false);
                  setShowPostCard(false);
                  handleFollow.mutate(postDetail?.postedBy?._id);
                }}
                className="border border-b-0 border-gray-600 bg-gray-950 text-red-500 w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
              >
                Follow
              </button>
            )}
          </div>
          {/* cancel */}
          <div>
            <button
              onClick={() => {
                setShowPostMenuCard(false);
              }}
              className="border rounded-b-2xl border-gray-600 bg-gray-950 text-white w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMenu;
