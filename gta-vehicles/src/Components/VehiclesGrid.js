import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import VehiclesFile from "../vehicles.json";
import VehiclesCard from "./VehiclesCard";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

export default function VehiclesGrid() {
  const selectedCategories = useSelector((state) => state.selectedCategories);

  return (
    <Box sx={{ display: "flex", width: "70%", flexDirection: "row" }}>
      <button onClick={() => console.log(selectedCategories)}>Click</button>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {selectedCategories.map((categoriesElement, i) => {
          return Object.values(categoriesElement).map((element, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <VehiclesCard props={element} />
            </Grid>
          ));
        })}
      </Grid>
    </Box>
  );
}
