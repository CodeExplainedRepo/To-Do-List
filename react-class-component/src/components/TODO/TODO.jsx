import React, { Component } from "react";
import { limit50Chars } from "../../utils";

import "./todolist.css";

export default class TODO extends Component {
  render() {
    const { title, id } = this.props.item;
    const { removeTodo } = this.props;
    return (
      <li key={id} className="todo__item">
        <p className="todo__item__text">{limit50Chars(title)}</p>
        <button className="todo__delete-icon" onClick={() => removeTodo(id)}>
          X
        </button>
      </li>
    );
  }
}
