export const selectZip = (zip) => {
  return {
    type: "SELECT_ZIP",
    payload: zip,
  };
};
