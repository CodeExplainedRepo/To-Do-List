import React, { Component } from 'react';
import { fetchAllTodos } from "../../apis/todoServices";

export default class TodoCounts extends Component {
    constructor(props){
        super(props);
        this.state={
            count: 0,
        };
    }

    componentDidMount(){
        fetchAllTodos().then((data) => {
            this.setState({count: data.length})
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}
