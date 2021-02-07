import React, { Component } from 'react';
import TODO from "./TODO";
import { fetchAllTodos, addTodo, removeTodo } from "../../apis/todoServices";
import { limit10Items } from "../../utils";
import "./todolist.css";


export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            userInput: "",
            todos: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.cleanUserInput = this.cleanUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    componentDidMount(){
        fetchAllTodos().then((data) => this.setState({todos: limit10Items(data)}));
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
        addTodo(newTodo).then((data) => this.setState((prevState) => ({todos: [data,...prevState.todos]})));
    }

    handleRemoveTodo(id){
        removeTodo(id).then((data) => this.setState((prevState) => ({todos: prevState.todos.filter((todo) => todo.id !== id)})));
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
                    {this.state.todos?.map((item) => (
                        <TODO key={item.id} item={item} handleRemoveTodo={this.handleRemoveTodo}/>
                    ))}
                </ul>
            </section>
        )
    };
};
