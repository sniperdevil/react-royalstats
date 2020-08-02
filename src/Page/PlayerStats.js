import React, { Component } from "react";
import { connect } from "react-redux";
import { searchData } from "../actions/SearchAction";
import About from "../components/About_player";
import Arena from "../components/Arena_player";
// import Badge from "../components/Badge_player";
import Header from "../components/Header_player";

class PlayerStats extends Component {
  render() {
    return (
      <div className="container mx-auto my-4">
        <Header />
        <About />
        <Arena />
        {/* <Badge /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  { searchData }
)(PlayerStats);
