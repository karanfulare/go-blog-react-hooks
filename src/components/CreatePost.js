import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [content, setContent] = useState();

  function handleSubmit(e) {
    e.prevenDefault();
    console.log("title", title);
    console.log("title", subtitle);
    console.log("title", content);
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form>
        <div className="form-field">
          <lable>Title </lable>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-field">
          <lable>Sub Title </lable>
          <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        <div className="form-field">
          <lable>Content</lable>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
