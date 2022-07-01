import React from "react";
import { image, avatar } from "../Assets/index";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShopIcon from "@mui/icons-material/Shop";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
function Sidebar() {
  return (
    <div class="sidebar">
      <img class="everbee" src={image} />
      <div class="ever-title">
        <div class="icon-badge">
          <button type="button" class="icon-button" id="cart-button">
            <span>
              <img class="icon-img" src={avatar} />
            </span>
          </button>
        </div>
        <h3 className="heading">PVTLmotions</h3>
      </div>
      <div className="side-bar-contents">
        {" "}
        <DashboardIcon style={{}} />
        <h3 className="heading-1">Dashboard</h3>
      </div>
      <div className="side-bar-contents">
        {" "}
        <ShopIcon />
        <h3 className="heading-1">My Shop</h3>
      </div>
      <div className="side-bar-contents">
        {" "}
        <UpgradeIcon />
        <h3 className="heading-1">Upgrade</h3>
      </div>
      <div className="side-bar-contents">
        {" "}
        <SavedSearchIcon />
        <h3 className="heading-1">Research Tools</h3>
      </div>
      <div className="side-bar-contents">
        {" "}
        <AccessibilityIcon />
        <h3 className="heading-1">Research Tools</h3>
      </div>
      <div className="side-bar-contents">
        {" "}
        <SavedSearchIcon />
        <h3 className="heading-1">Research Tools</h3>
      </div>
      <div className="side-bar-contents">
        {" "}
        <BookmarkBorderIcon />
        <h3 className="heading-1">Wishlist</h3>
      </div>
      <div class="ever-title-bottom">
        <div class="icon-badge">
          <button type="button" class="icon-button" id="cart-button">
            <span>
              <img class="icon-img" src={avatar} />
            </span>
          </button>
        </div>
        <h3 className="heading">Cody</h3>
      </div>
    </div>
  );
}

export default Sidebar;
