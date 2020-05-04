import React from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

class Landing extends React.Component {
  render() {
    return (
      <TextField
        id="standard-basic"
        label="Enter Your Zip"
        value={this.props.zip}
      ></TextField>
    );
  }
}

const mapStateToProps = (state) => {
  return { zip: state.zip };
};

export default connect(mapStateToProps)(Landing);
