import React from "react";
import Layout from "./components/layout/layout";
import TodoCounts from "./components/TODO/TodoCounts";
import TodoList from "./components/TODO/todoList";

function App() {
  return (
    <Layout>
      <TodoCounts />
      <TodoList />
    </Layout>
  );
}

export default App;
