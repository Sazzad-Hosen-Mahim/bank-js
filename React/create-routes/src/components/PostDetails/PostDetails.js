import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body, userId } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };
  return (
    <div>
      <h2>Details about post:{id} </h2>
      <p>Title: {title}</p>
      <p>
        <small>Body: {body}</small>
      </p>
      <button onClick={handleNavigate}>Get author</button>
    </div>
  );
};

export default PostDetails;
