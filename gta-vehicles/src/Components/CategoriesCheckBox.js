import React from "react";
import { useSelector, useDispatch } from "react-redux";
import VehiclesFile from "../vehicles.json";
import {
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function CategoriesCheckBox() {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state) => state.selectedCategories);
  const displayedCategories = useSelector((state) => state.displayedCategories);

  const handleChangeCheckBox = (event) => {
    let newValues = selectedCategories;
    // if (selectedCategories.length !== 0) {
    //   Object.values(VehiclesFile[event.target.value]).map((elem, index) => {
    //     newValues[0][elem.model] = elem;
    //   });
    //   console.log(newValues);
    // }  /////Condition pour tout mettre dans l'objet en consecutif sans type de vehicule, mais il faut trouver comment pouvoir les retirer de manière simple
    if (!event.target.checked) {
      dispatch({
        type: "selectedCategoriesChanged",
        payload: selectedCategories.filter(
          (item) => item !== VehiclesFile[event.target.value]
        ),
      });
    } else {
      dispatch({
        type: "selectedCategoriesChanged",
        payload: [...selectedCategories, VehiclesFile[event.target.value]],
      });
    }
  };

  return (
    <Box>
      <Box sx={{ backgroundColor: "#93B592" }}>
        <Typography>Categories</Typography>
      </Box>
      <FormGroup>
        {Object.keys(VehiclesFile).map((elem, index) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={elem === "commercial" ? true : false}
                />
              }
              value={elem}
              onChange={handleChangeCheckBox}
              label={elem}
              key={index}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
}
