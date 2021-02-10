import React, { Component } from "react";
import { limit50Chars } from "../../utils";
import RandomColorText from "../randomColorText/randomColorText";

import "./todolist.css";

export default class ColorfulTODO extends Component {
  render() {
    const { id, title } = this.props.item;
    const { removeTodo } = this.props;
    return (
      <li key={id} className="todo__item">
        <p className="todo__item__text">
          <RandomColorText>{limit50Chars(title)}</RandomColorText>
        </p>
        <button className="todo__delete-icon" onClick={() => removeTodo(id)}>
          X
        </button>
      </li>
    );
  }
}
