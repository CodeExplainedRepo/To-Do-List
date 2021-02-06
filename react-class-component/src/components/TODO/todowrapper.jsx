import React, { Component } from 'react'

export default class TODOWrapper extends Component {
    constructor(props){
        super(props);
        this.state={
            todoInput: "",
            todoList: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
    }

    function handleChange(e) {
        this.setState({...this.state, todoInput: e.target.value});
    }

    function handleKeyup(e) {
        if(e.target.value === "e"){
            
        }
    }



    render() {
        return (
            <div className="todo__wrapper">
                <TODOInput value={this.state.todoInput} handleChange={this.handleChange} handleKeyup={this.handleKeyup} />
                <div className="todo__content">
                    {this.state.todoList.map((item) => (
                        <TODOItem key={item.name} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}
