import React from "react";
import { design, rectangle, todo } from "../Assets/index";
import BCard from "./Card";
import "./table.css";
function Main() {
  return (
    <div>
      <div className="hero">
        <img className="design-image" src={design} />
        <h1 style={{ fontFamily: "Poppins" }} className="good">
          Good Morning ,Cody
        </h1>
        <h1 style={{ fontFamily: "Poppins" }} className="good-1">
          Take a look at the latest update for your shop PVTLmotions
        </h1>
      </div>
      <div className="hero-icons">
        <div className="icons">
          <img src={rectangle} />
          <div className="todo-icon">
            <img src={todo} />
          </div>
        </div>
        <div className="icons-1">
          <img src={rectangle} />
          <div className="todo-icon-1">
            <img src={todo} />
          </div>
        </div>
        <div className="icons-2">
          <img src={rectangle} />
          <div className="todo-icon-2">
            <img src={todo} />
          </div>
        </div>
        <div className="icons-3">
          <img src={rectangle} />
          <div className="todo-icon-3">
            <img src={todo} />
          </div>
        </div>
        <div className="icons-4">
          <img src={rectangle} />
          <div className="todo-icon-4">
            <img src={todo} />
          </div>
        </div>
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
      <div className="card-box-4">
        <BCard />
      </div>
    </div>
  );
}

export default Main;
