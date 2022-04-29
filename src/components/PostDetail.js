import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";

function PostDetail() {
  const [posts, setPosts] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection("posts")
      .doc(postId)
      .get()
      .then((snapshot) => {
        setPosts(snapshot.data());
      });
  }, []);

  return (
    <div className="pos-detail">
      <h1>{posts.title}</h1>
      <p>{posts.content}</p>
    </div>
  );
}

export default PostDetail;
