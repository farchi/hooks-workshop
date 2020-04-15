import React from "react";
import { SketchPicker } from "react-color";
import * as ColorSubscriptions from "./ColorSubscriptions";

export default class Component extends React.Component {
  state = {
    background: "#fff",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    ColorSubscriptions.changeColor(color.hex);
  };

  render() {
    return <SketchPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />;
  }
}
