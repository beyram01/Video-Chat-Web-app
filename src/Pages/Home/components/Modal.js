import React, { useState } from "react";
import Button from "../../../GlobalComponents/Button";
import "../css/Modal.css";

const Modal = () => {
  const [username, setUsername] = useState("");

  const saveUsename = () => {
    localStorage.setItem("QC-Username", username);
  };

  return (
    <div className="modal-background">
      <form className="modal-container">
        <h2>Username</h2>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit" onClick={saveUsename}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default Modal;
