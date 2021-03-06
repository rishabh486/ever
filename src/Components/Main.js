import React from "react";
import {
  design,
  night,
  rectangle,
  setting,
  todo,
  alarm,
  ticks,
  revenue,
  aov,
  orders,
  ltv,
  shops,
  dot,
  square,
  square1,
  square2,
  square4,
  square3,
} from "../Assets/index";
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
          <div className="dot-icon">
            <img src={dot} />
          </div>
        </div>
        <div className="icons-1">
          <img src={rectangle} />
          <div className="todo-icon-1">
            <img src={ticks} />
          </div>
          <div className="dot-icon">
            <img src={dot} />
          </div>
        </div>
        <div className="icons-2">
          <img src={rectangle} />
          <div className="todo-icon-2">
            <img src={setting} />
          </div>
          <div className="dot-icon">
            <img src={dot} />
          </div>
        </div>
        <div className="icons-3">
          <img src={rectangle} />
          <div className="todo-icon-3">
            <img src={night} />
          </div>
          <div className="dot-icon">
            <img src={dot} />
          </div>
        </div>
        <div className="icons-4">
          <img src={rectangle} />
          <div className="todo-icon-4">
            <img src={alarm} />
          </div>
          <div className="dot-icon">
            <img src={dot} />
          </div>
        </div>
      </div>

      <div className="card-box">
        <BCard
          src={revenue}
          border={square}
          name="Gross Revenue"
          content="$48670.19"
          percent="10.30%%"
          visual=" from last week"
        />
      </div>
      <div className="card-box-1">
        <BCard
          src={aov}
          border={square1}
          name="AOV"
          content="$335.65"
          percent="12.30%"
          visual=" from last week"
        />
      </div>
      <div className="card-box-2">
        <BCard
          src={orders}
          border={square2}
          name="Total Orders"
          content="145"
          percent="47%"
          visual=" from last week"
        />
      </div>
      <div className="card-box-3">
        <BCard
          src={ltv}
          border={square3}
          name="LTV"
          content="$456"
          percent="27%"
          visual=" from last week"
        />
      </div>
      <div className="card-box-4">
        <BCard
          src={shops}
          border={square4}
          name="Shop Rank"
          content="Top 5%"
          percent="54%"
          visual=" behind you"
        />
      </div>
    </div>
  );
}

export default Main;
