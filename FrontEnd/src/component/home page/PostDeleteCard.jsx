import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delPost, myPost } from "../../api/post";

const ChangePost = ({
  setShowChangePostCard,
  selectedPostData,
  setShowPostCard,
}) => {
  const queryClint = useQueryClient();

  const deletePost = useMutation({
    mutationFn(id) {
      return delPost(id);
    },
    onMutate() {
      queryClint.setQueryData(["myPosts"], (cachePost) => {
        if (cachePost) {
          return {
            myPosts: [
              ...cachePost.myPosts.filter(
                (post) => selectedPostData._id !== post._id,
              ),
            ],
          };
        }
      });
    },
    onSuccess() {
      setShowChangePostCard(false);
      setShowPostCard(false);
    },
    onError(error) {
      return error.message;
    },
  });

  return (
    <>
      {deletePost.isPending && (
        <div className="flex flex-col items-center ml-[25vw] h-screen">
          <div className="flex justify-center items-center h-screen font-bold text-white text-2xl text-center ml-[20vw]">
            <p> Deleting the post ...</p>
          </div>
        </div>
      )}
      {deletePost.isIdle && (
        <div className="fixed inset-0 z-50 bg-gray-900/70 ">
          <div className="flex flex-col items-center justify-center h-screen">
            <div>
              {/* edit post btn */}
              {/* <div>
            <button
              onClick={() => {}}
              className="border border-b-0 border-gray-600 bg-gray-950 text-blue-500 w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
            >
              Edit
            </button>
          </div> */}
              {/* delete post btn */}
              <div>
                <button
                  onClick={() => {
                    deletePost.mutate(selectedPostData._id);
                  }}
                  className="border border-b-0 border-gray-600 bg-gray-950 text-red-500 w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
                >
                  Delete
                </button>
              </div>

              {/* cancel */}
              <div>
                <button
                  onClick={() => {
                    setShowChangePostCard(false);
                  }}
                  className="border rounded-b-2xl border-gray-600 bg-gray-950 text-white w-[28vw] text-center py-3 text-lg hover:bg-gray-900"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePost;
