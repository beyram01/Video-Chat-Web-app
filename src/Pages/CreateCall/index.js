import React from "react";
import Button from "../../GlobalComponents/Button";
import "./css/CreateCall.css";

const index = () => {
  const createCall = () => {};

  return (
    <div className="create-call">
      <h1>Quick Call Your Friends</h1>
      <form className="create-call-container">
        <h2>Create Call</h2>
        <input type="text" name="title" id="title" placeholder="Title" />
        <select name="status" id="status">
          <option value="open">Open</option>
          <option value="private">Private</option>
        </select>
        <Button type="submit" onClick={createCall}>
          Create Call
        </Button>
      </form>
    </div>
  );
};

export default index;
