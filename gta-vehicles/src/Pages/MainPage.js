import { Box } from "@mui/material";
import CategoriesCheckBox from "../Components/CategoriesCheckBox";
import SortBy from "../Components/SortBy";
import VehiclesGrid from "../Components/VehiclesGrid";

export default function MainPage() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <CategoriesCheckBox />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
        }}
      >
        {/* <SortBy /> */}
        <VehiclesGrid />
      </Box>
    </Box>
  );
}
