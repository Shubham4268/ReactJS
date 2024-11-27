import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, PostForm } from "../components";
import postService from "../appwrite/config";

// If the URL contains a slug and the slug corresponds to an existing post, then display the PostForm component for editing the post. If no slug is present or if the slug does not lead to a valid post, it redirects the user to the homepage 

function EditPost() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      postService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/all-posts");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
