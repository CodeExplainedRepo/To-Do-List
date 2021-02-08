import React, { Component } from "react";
import { withTodos } from "../../HOC/withTodos";
class TodoCounts extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

// export default withTodos(TodoCounts);
export default TodoCounts;
