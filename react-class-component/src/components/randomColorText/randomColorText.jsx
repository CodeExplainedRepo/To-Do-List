import React, { Component } from "react";
import { randomColor } from "../../utils";

export default class RandomColorText extends Component {
  constructor(props) {
    super(props);
    this.state = { colors: [] };
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState({ colors: this.props.children.split("").map((_) => randomColor()) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <>
        {this.props.children.split("").map((char, index) => (
          <span style={{ color: this.state.colors[index] }}>{char}</span>
        ))}
      </>
    );
  }
}
