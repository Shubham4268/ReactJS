import React from "react";
import { useState, useEffect } from "react";
import postService from "../appwrite/config";
import { Postcard, Container, Button } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoadOff, setLoadOn } from "../store/postSlice";
import Loader from "./Loader";

// Home component is responsible for fetching posts from the server and displaying them. If no posts are available, it prompts the user to login, otherwise, it displays the fetched posts using the Postcard component.

function Home() {
  const [posts, setPosts] = useState([]);
  const status = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const load = useSelector((state) => state.post.loading);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    dispatch(setLoadOn());
    postService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      } else setPosts([]);
      dispatch(setLoadOff());
    });
  }, [status,userData]);

  if (load && ! userData) {
    return <Loader />;
  } else {
    if (!status ) {
      console.log(status);
      return (
        <div className="w-full h-full flex justify-center items-center py-4 mt-4">
          <Container>
            <Link to="/login">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </Link>
          </Container>
        </div>
      );
    } else {
      console.log(userData)
      const hasPostsForUser = posts.some(
        (post) => post.userId === userData.$id
      );

      if (!hasPostsForUser) {
        return (
          <div className="w-full py-8 mt-4 text-center">
            <Container>
              <div className="w-full text-start inline-bock px-6 py-2 text-3xl bg-green-600 shadow-lg text-white rounded-xl m-2">
                Your Posts
              </div>
              <div className="flex flex-wrap">
                <div className="p-2 w-full">
                  <h1 className="text-2xl font-bold py-4">No posts yet!!</h1>
                  <Button
                    className="text-2xl "
                    onClick={(e) => navigate("/add-post")}
                  >
                    Add Your First Blog
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        );
      } else {
        return (
          <div>
            <div className="w-full py-5 ">
              <Container>
                <div className="w-full text-start inline-bock px-6 py-2 text-3xl bg-green-600 shadow-lg text-white rounded-xl m-2">
                  Your Posts
                </div>
                <div className="flex flex-wrap justify-start ">
                  {posts.map(
                    (post) =>
                      userData.$id === post.userId && (
                        <div key={post.$id} className="p-2 max-w-72 ">
                          <Postcard {...post} />
                        </div>
                      )
                  )}
                </div>
              </Container>
            </div>
          </div>
        );
      }
    }
  }
}
export default Home;
