import React, { Component } from 'react';
import { limit50Chars } from "../../utils";

import "./todolist.css";

export default class TODO extends Component {
    render() {
        const {key, title, id} = this.props.item;
        const { handleRemoveTodo } = this.props;
        return (
            <li key={key} className="todo__item">
                <p className="todo__item__text">{limit50Chars(title)}</p>
                <button className="todo__delete-icon" onClick={() => handleRemoveTodo(id)}>X</button>
            </li>
        )
    }
}
