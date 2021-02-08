import React from "react";
import Layout from "./components/layout/layout";
import TodoCounts from "./components/TODO/TodoCounts";
import TodoList from "./components/TODO/todoList";
import WithTodosData from "./renderProps/withTodosData";

function App() {
  return (
    <Layout>
      {/* <TodoCounts />
      <TodoList /> */}
      <WithTodosData render={(todos, addTodo, removeTodo)=><TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />} />
    </Layout>
  );
}

export default App;
