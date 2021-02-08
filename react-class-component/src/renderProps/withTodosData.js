import React from 'react';
import { fetchAllTodos, addTodo, removeTodo } from '../apis/todoServices';
export default class WithTodosData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [],
      };
      this.hanldeAddTodo = this.hanldeAddTodo.bind(this);
      this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    hanldeAddTodo(newTodo) {
      addTodo(newTodo).then((data) => {
        this.setState((preState) => ({
          todos: [data, ...preState.todos],
        }));
      });
    }

    handleRemoveTodo(id) {
      removeTodo(id).then((data) => {
        this.setState((preState) => ({
          todos: preState.todos.filter((todo) => todo.id !== id),
        }));
      });
    }

    componentDidMount() {
        fetchAllTodos().then((data) => {
        console.log(data);
        this.setState({
          todos: data,
        });
      });
    }

    render() {
      return this.props.render(this.state.todos, this.hanldeAddTodo, this.handleRemoveTodo);
    }
  };