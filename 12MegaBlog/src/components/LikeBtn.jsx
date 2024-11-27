import React, { useEffect, useState } from "react";
import postService from "../appwrite/config";

function LikeBtn(post) {
  const [liked, setLiked] = useState(false);
  console.log(post);
  const likeHandler =  () => {
    try {
      setLiked(!liked);
      var postlikes = post.likes;
      console.log(post);
      if (liked == true) {
        console.log("liked");
        postlikes = postlikes + 1;
        console.log(postlikes);
      }
      const dpPost =  postService.updatePost(post.$id, {
        likes: postlikes,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {

  // }, [liked]);

  return (
    <div>
      <button
        onClick={likeHandler}
        className={`inline-bock px-6 py-2 duration-200 text-lg   ${
          liked ? "bg-red-600" : "bg-green-600"
        }`}
      >
        Like {post.likes}
      </button>
    </div>
  );
}

export default LikeBtn;
