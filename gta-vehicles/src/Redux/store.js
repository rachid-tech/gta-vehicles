import { createStore } from "redux";
import VehiclesFile from "../vehicles.json";

const initialState = {
  selectedCategories: [VehiclesFile["commercial"]],
  displayedCategories: [],
};

function reducer(state = initialState, action) {
  if (action.type === "selectedCategoriesChanged") {
    return { ...state, selectedCategories: action.payload };
  }
  if (action.type === "displayedCategoriesChanged") {
    return { ...state, displayedCategories: action.payload };
  }
  return state;
}
export const store = createStore(reducer);
