import React from "react";
import { design } from "../Assets/index";
import BCard from "./Card";
import "./table.css";
function Main() {
  return (
    <div>
      <div className="hero">
        <img className="design-image" src={design} />
      </div>
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
