import React from "react";
import Button from "../../../GlobalComponents/Button";
import "../css/Call.css";

const Call = ({ call }) => {
  const { id, title, open } = call;
  const roomStatusStyle = {
    backgroundColor: open ? "#62D081" : "#D06F62",
  };

  const joinCall = () => {};

  return (
    <div className="room">
      <div style={roomStatusStyle} className="room-status">
        {open ? "Open" : "Private"}
      </div>
      <p className="room-title">{title}</p>
      <Button onClick={joinCall}>Join</Button>
    </div>
  );
};

export default Call;
