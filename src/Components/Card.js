import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { revenue, arrow, todo, avatar, square } from "../Assets";

export default function BCard() {
  return (
    <Card
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
      sx={{ width: 200, height: 170, borderRadius: 6 }}
    >
      <CardContent>
        {/* <Avatar src={avatar} /> */}
        <img className="card-image-parent" src={square} />
        <img className="card-image" src={revenue} />
        <Typography
          sx={{ fontSize: 17, fontFamily: "poppins" }}
          color="rgba(112, 112, 112, 1)"
          gutterBottom
        >
          Gross Revenue
        </Typography>
        <Typography
          sx={{ fontSize: 15, fontFamily: "poppins" }}
          color="rgba(0, 0, 0, 1)"
        >
          $48,670.19
        </Typography>
        <div className="box-layer">
          <img style={{ width: 10, height: 10 }} src={arrow} />
          <Typography
            sx={{ fontSize: 15, fontFamily: "poppins" }}
            color="
            rgba(14, 176, 0, 1)"
          >
            10.30%
          </Typography>
          <Typography
            sx={{ fontSize: 15, fontFamily: "poppins" }}
            color="rgba(0, 0, 0, 1)"
          >
            from last week
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
