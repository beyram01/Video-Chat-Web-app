import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../GlobalComponents/Button";
import Modal from "./components/Modal.js";
import Call from "./components/Call.js";
import { avatar, call, newCall } from "../../svgs";
import "./css/index.css";

const fakeData = [
  {
    id: 1,
    title:
      "Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 Room 1 ",
    open: true,
  },
  {
    id: 2,
    title: "Room 2",
    open: false,
  },
  {
    id: 3,
    title: "Room 3",
    open: true,
  },
  {
    id: 4,
    title: "Room 4",
    open: false,
  },
];

function Home() {
  const [id, setId] = useState("");

  const history = useHistory();

  const createCall = () => {
    history.push(`/create-call`);
  };

  const joinCall = () => {
    history.push(`/join-call`);
  };

  const checkUsername = () => {
    return localStorage.getItem("QC-Username");
  };

  return (
    <div className="Home">
      {checkUsername() ? (
        <>
          <h1>Quick Call Your Friends</h1>
          <div className="call-to-actions">
            <div className="user">
              <div id="avatar">{avatar}</div>
              <p>{checkUsername()}</p>
            </div>
            <div>
              <Button onClick={joinCall}>
                <div id="call">{call}</div>
                <p>Join Call</p>
              </Button>
              <Button onClick={createCall}>
                <div id="newCall">{newCall}</div>
                <p>Create Call</p>
              </Button>
            </div>
          </div>
          <div className="calls">
            <div className="filter">
              <h5>Filter</h5>
              <div>
                <div className="checkbox-container">
                  <input type="checkbox" name="open" id="open" />
                  <label htmlFor="open">Open</label>
                </div>
                <div className="checkbox-container">
                  <input type="checkbox" name="private" id="private" />
                  <label htmlFor="private">Private</label>
                </div>
              </div>
            </div>
            <div className="calls-list">
              <h5>Calls</h5>
              <div className="rooms">
                {fakeData.map((call) => (
                  <Call key={call.id} call={call} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Modal />
      )}
    </div>
  );
}

export default Home;
