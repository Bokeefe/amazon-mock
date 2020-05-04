import React from "react";
import TextField from "@material-ui/core/TextField";

class AddIndustryForm extends React.Component {
  render() {
    return (
      <div className="add-industry-container">
        <form action="" style={{ margin: "1rem" }}>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
        </form>
      </div>
    );
  }
}

export default AddIndustryForm;
