import React from "react";
import { Container, Postcard } from "../components";
import { useState, useEffect } from "react";
import postService from "../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { setLoadOff, setLoadOn } from "../store/postSlice";
import Loader from "./Loader";

// As soon as the page is loaded, the component fetches all the posts from the database and stores them as an array in a state. Then, if the posts are successfully fetched, it displays them one by one using the Postcard component.

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const load = useSelector((state) => state.post.loading);

  useEffect(() => {
    dispatch(setLoadOn());
    postService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      dispatch(setLoadOff());
    });
  }, []);

  if (load) {
    return <Loader />;
  } else {
    if (posts.length > 0) {
      return (
        <div className=" py-5 ">
          <Container>
            <div className="flex flex-wrap justify-start ">
              {posts.map((post) => (
                <div key={post.$id} className="p-2 max-w-72 mx-3">
                  <Postcard {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      );
    } else {
      return (
        <Container>
          <div className="flex flex-wrap py-8 mt-4">
            <p className="text-2xl font-bold text-red-600">
              No Posts available
            </p>
          </div>
        </Container>
      );
    }
  }
}
export default AllPosts;
