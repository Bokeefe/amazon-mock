import React from "react";
import PropTypes from "prop-types";
import MatNav from "./mat-nav";
import { connect } from "react-redux";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MatNav />;
  }
}

const mapStateToProps = (state) => {
  console.log("hit");
  console.log(state);
  return state;
};
export default connect(mapStateToProps)(Header);
