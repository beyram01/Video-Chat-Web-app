import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Room Id: {id}</h1>
    </div>
  );
};

export default Room;
