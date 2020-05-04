import { combineReducers } from "redux";

const zip = () => {
  return "80203";
};

const selectZipReducer = (selectZip = null, action) => {
  if (action.type === "SELECT_ZIP") {
    return action.payload;
  }
  return selectZip;
};

export default combineReducers({
  zip,
  selectZipReducer,
});
