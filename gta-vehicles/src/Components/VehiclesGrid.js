import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import VehiclesFile from "../vehicles.json";
import VehiclesCard from "./VehiclesCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function VehiclesGrid() {
  const [typeOfVehicle, setAge] = React.useState("super");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: "70%" }}>
      Vehicle Type
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={typeOfVehicle}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"boats"}>boats</MenuItem>
          <MenuItem value={"commercial"}>commercial</MenuItem>
          <MenuItem value={"compacts"}>compacts</MenuItem>
          <MenuItem value={"coupes"}>coupes</MenuItem>
          <MenuItem value={"cycles"}>cycles</MenuItem>
          <MenuItem value={"emergency"}>emergency</MenuItem>
          <MenuItem value={"helicopters"}>helicopters</MenuItem>
          <MenuItem value={"industrial"}>industrial</MenuItem>
          <MenuItem value={"military"}>military</MenuItem>
          <MenuItem value={"motorcycles"}>motorcycles</MenuItem>
          <MenuItem value={"muscle"}>muscle</MenuItem>
          <MenuItem value={"offroad"}>offroad</MenuItem>
          <MenuItem value={"planes"}>planes</MenuItem>
          <MenuItem value={"sedans"}>sedans</MenuItem>
          <MenuItem value={"service"}>service</MenuItem>
          <MenuItem value={"sports"}>sports</MenuItem>
          <MenuItem value={"sportsclassics"}>sportsclassics</MenuItem>
          <MenuItem value={"super"}>super</MenuItem>
          <MenuItem value={"suvs"}>suvs</MenuItem>
          <MenuItem value={"trains"}>trains</MenuItem>
          <MenuItem value={"utility"}>utility</MenuItem>
          <MenuItem value={"vans"}>vans</MenuItem>
        </Select>
      </FormControl>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Object.values(VehiclesFile[typeOfVehicle]).map((element, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <VehiclesCard props={element} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
