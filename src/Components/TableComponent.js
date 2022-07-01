// import { TableBody, TableCell } from "@mui/material";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Update } from "@material-ui/icons";
import { ListItemSecondaryAction } from "@mui/material";
export default function TableComponent() {
  const [callData, setCallData] = useState([]);

  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://everbee-web-dev-ext.herokuapp.com/listing?limit=20&offset=10"
      );
      console.log(response);
      const responseData = [...response.data.data];
      setCallData((previous) => (previous = responseData));
    } catch (e) {
      console.log(e.response);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  const detailsRows = callData.map((item) => {
    return {
      Images: item.Images,
      id: item.id,
      model: item.model_no,
      title: item.title,
      quantity: item.quantity,
      reviews: item.reviews,
      price: item.price,
      views: item.views,
      tags: item.tags,
    };
  });

  return (
    <div
      style={{
        width: 800,
        height: 600,
        backgroundColor: "white",
        borderRadius: 20,
        borderBottom: 0,
        GridLinesVisibility: "None",
      }}
    >
      <DataGrid
        GridLinesVisibility="None"
        columns={[
          {
            field: "image",
            headerName: "Image",
            description:
              "The identification used by the person with access to the online service.",
            renderCell: (params) => {
              return (
                <>
                  <Avatar src={params.row.Images} />
                </>
              );
            },
          },
          {
            field: "title",
            headerName: "Title",
            description:
              "The identification used by the person with access to the online service.",
            renderCell: (params) => {
              return <>{params.row.title}</>;
            },
          },
          { field: "price", headerName: "Price" },
          {
            field: "quantity",
            headerName: "Quantity",
            description:
              "The identification used by the person with access to the online service.",
          },
          {
            field: "views",
            headerName: "Views",
            description:
              "The identification used by the person with access to the online service.",
          },
          {
            field: "reviews",
            headerName: "Reviews",
            description:
              "The identification used by the person with access to the online service.",
          },
          {
            field: "tags",
            headerName: "Tags",
            description:
              "The identification used by the person with access to the online service.",
          },
        ]}
        rows={detailsRows}
        components={{
          Toolbar: GridToolbar,
        }}
        sx={{
          border: 0,
          m: 2,
          fontSize: 15,
        }}
      />
    </div>
  );
}
