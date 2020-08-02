import React from "react";
import { connect } from "react-redux";
import { testAction } from "../../actions/Testaction";

class Test extends React.Component {
  componentDidMount() {
    this.props.testAction();
  }
  render() {
    return <h1>Test </h1>;
  }
}

const mapStateToProps = state => ({
  test: state.test.result
});

export default connect(
  mapStateToProps,
  { testAction }
)(Test);
