import React, { useState } from "react";

function Light({ lightOn, toggleLight }) {
  return (
    <button className="btn btn-primary mt-3" onClick={toggleLight}>
      {lightOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

function Room() {
  const [lightOn, setLightOn] = useState(false);

  const toggleLight = () => {
    setLightOn((prev) => !prev);
  };

  return (
    <div className="text-center mt-5">
      <h1>{lightOn ? "The room is bright" : "The room is dark"}</h1>
      <Light lightOn={lightOn} toggleLight={toggleLight} />
    </div>
  );
}

export default Room;
