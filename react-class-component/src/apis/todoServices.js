const baseURL = "https://jsonplaceholder.typicode.com";
const path = "todos";
const endpoint = [baseURL,path].join("/");

export const fetchAllTodos = () => fetch(endpoint).then(response => response.json());
export const addTodo = (newTodo) => fetch(endpoint,{
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(res => res.json());

export const removeTodo = (id) => fetch([endpoint,id].join("/"),{method: "DELETE"}).then((res) => res.json());