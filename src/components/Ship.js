import React from "react";
import "./Ship.css";

//? component rendering rotating ship. Can be paused or running after seting state acorrdingly
const Ship = (props) => {
  return (
    <div className="center pa5 ph5-ns flex items-center flex-column">
      <img
        className="Ship-logo"
        style={{ animationPlayState: !props.refresh ? "running" : "paused" }}
        src={`https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/512/international-space-station-icon.png`}
        onClick={props.click}
      />
    </div>
  );
};

export default Ship;
