import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { revenue } from "../Assets";

export default function BCard() {
  return (
    <Card style={{}} sx={{ width: 210, height: 204, borderRadius: 6 }}>
      <CardContent>
        <Avatar src={revenue} />
        <Typography
          sx={{ fontSize: 18, fontFamily: "poppins" }}
          color="rgba(112, 112, 112, 1)"
          gutterBottom
        >
          Gross Revenue
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="rgba(112, 112, 112, 1)">
          $48,670.19
        </Typography>
      </CardContent>
    </Card>
  );
}
