import React from "react";
import { design } from "../Assets/index";
import BCard from "./Card";
function Main() {
  return (
    <div>
      <img className="design-image" src={design} />
      <div className="card-box">
        <BCard />
      </div>
      <div className="card-box-1">
        <BCard />
      </div>
      <div className="card-box-2">
        <BCard />
      </div>
      <div className="card-box-3">
        <BCard />
      </div>
    </div>
  );
}

export default Main;
