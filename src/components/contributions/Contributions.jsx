import React from "react";
import "./Contributions.css";
import { username } from "../Constant";

const Contributions = () => {
  return (
    <div>
      <h1>{username}'s Contribution Graph</h1>
      <div className="graph">
        <img
          src={`https://ghchart.rshah.org/ffdfe4/${username}`}
          alt={`${username} GitHub Contribution Graph`}
        />
      </div>
    </div>
  );
};

export default Contributions;