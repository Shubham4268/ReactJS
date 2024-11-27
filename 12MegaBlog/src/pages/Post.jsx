import React, { useState, useEffect } from "react";
import postService from "../appwrite/config";
import { Container, Button } from "../components";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { setLoadOff, setLoadOn } from "../store/postSlice";
import Loader from "./Loader";
// import LikeBtn from "../components/LikeBtn";

function Post() {
  const [post, setpost] = useState(null);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const load = useSelector((state) => state.post.loading);

  // The line of code sets the isAuthor variable to true if both post and userData exist and the userId of the post matches the $id of the userData. Otherwise, it sets isAuthor to false.
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    dispatch(setLoadOn());
    if (slug) {
      postService.getPost(slug).then((post) => {
        if (post) setpost(post);
        else navigate("/all-posts");
        dispatch(setLoadOff());
      });
    } else navigate("/all-posts");
  }, [navigate, slug]);

  const deletePost = () => {
    // postService.deletePost(slug)
    postService.deletePost(post.$id).then((status) => {
      if (status) {
        postService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  if (load) {
    return <Loader />;
  } else {
    return post ? (
      
      <div className="py-8">
        <Container className="flex justify-center ">
          <div className="pb-4 relative ">
            <h1 className="text-4xl font-bold">{post?.title.toUpperCase()}</h1>
            {isAuthor && (
              <div className="absolute right-1 top-0">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgcolor="bg-green-500 hover:bg-green-600"
                    className="mr-3"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  bgcolor="bg-red-500 hover:bg-red-600"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
          {post.Info.length > 900 ? (
            <div className="flex flex-col mb-4 p-2 items-center">
              <img
                className="rounded-xl w-2/3 m-4"
                src={postService.getFilePreview(post.featuredImage)}
                alt={post.title}
              />
              <div className="w-full rounded-xl border border-gray-300 px-4 py-2 bg-lime-100">
                <div className="browser-css text-justify">
                  {parse(post.Info)}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex mb-4  p-2 ">
              <img
                className="rounded-xl w-2/3 mx-4"
                src={postService.getFilePreview(post.featuredImage)}
                alt={post.title}
              />
              <div className="rounded-xl w-1/3 border border-gray-300 px-4 py-2 bg-lime-100">
                <div className="browser-css text-justify">
                  {parse(post.Info)}
                </div>
              </div>
            </div>
          )}
        </Container>
        {/* <div>
          Add like and share buttons
        </div> */}
      </div>
    ) : null;
  }
}

export default Post;
