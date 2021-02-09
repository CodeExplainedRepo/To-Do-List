import React from "react";
import Layout from "./components/layout/layout";
import TodoCounts from "./components/TODO/TodoCounts";
import TodoList from "./components/TODO/todoList";
import WithTodosData from "./renderProps/withTodosData";
import ColorfulTodo from "./components/TODO/colorfulTODO";

function App() {
  return (
    <Layout>
      {/* <TodoCounts />
      <TodoList /> */}
      <WithTodosData render={(todos) => <TodoCounts count={todos.length} />} />
      {/* <WithTodosData render={(todos, addTodo, removeTodo)=><TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />} /> */}
      <WithTodosData>
        {(todos, addTodo, removeTodo) => (
          <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo}>
            {(todos, removeTodo) => todos?.map((item) => <ColorfulTodo item={item} removeTodo={removeTodo} />)}
          </TodoList>
        )}
      </WithTodosData>
    </Layout>
  );
}

export default App;
