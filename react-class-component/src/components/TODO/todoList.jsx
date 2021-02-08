import React, { Component } from 'react';
import { withTodos } from '../../HOC/withTodos';
import TODO from "./TODO";
import "./todolist.css";


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            userInput: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.cleanUserInput = this.cleanUserInput.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({userInput: e.target.value});
    }

    cleanUserInput(){
        this.setState({userInput: ""});
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({userInput:""});
        const newTodo = {userId: 1, title: this.state.userInput};
        this.props.addTodo(newTodo);
    }

    render() {
        return (
            <section className="todo__wrapper">
                <form className="todo__form" onSubmit={this.handleSubmit}>
                    <div className="input__wrapper">
                        <input type="text" className="todo__input" value={this.state.userInput} onChange={this.handleChange} placeholder="What will you do today?"/>
                        <span className={this.state.userInput.length > 0 ? "input__clean-btn input__clean-btn--focus" : "input__clean-btn"} onClick={this.cleanUserInput}>X</span>
                    </div>
                </form>
                <ul className="todo__content">
                    {this.props.todos?.map((item) => (
                        <TODO key={item.id} item={item} handleRemoveTodo={() => this.props.removeTodo}/>
                    ))}
                </ul>
            </section>
        )
    };
};

export default withTodos(TodoList);