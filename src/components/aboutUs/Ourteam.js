import React from "react";

const Ourteam = ({ src, name, position }) => {
  return (
    <div className="ourteam-listing">
      <img src={src} alt="team member" />
      <h3>{name}</h3>
      <h6>{position}</h6>
    </div>
  );
};

export default Ourteam;
