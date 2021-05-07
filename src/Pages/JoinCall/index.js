import React from "react";
import Button from "../../GlobalComponents/Button";
import "../CreateCall/css/CreateCall.css";

const index = () => {
  const joinCall = () => {};

  return (
    <div className="create-call">
      <h1>Quick Call Your Friends</h1>
      <form className="create-call-container">
        <h2>Create Call</h2>
        <input type="text" name="roomId" id="roomId" placeholder="Id" />
        <Button type="submit" onClick={joinCall}>
          Join Call
        </Button>
      </form>
    </div>
  );
};

export default index;
