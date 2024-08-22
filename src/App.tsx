import React, { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { getTodos } from "./api/api";
import { Todo } from "./types";

function App() {

  const [todos, setTodos] = useState<string[]>([]);

  useEffect(()=>{
    setTodos(['todo1', 'todo2', 'todo3']);
    getTodos().then((todosFromServer: Todo[])=>{
      console.log(todosFromServer);
    })
  }, []);

  return (
    <div className="container flex flex-col mx-auto px-4 items-center">
      <TodoForm/>
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;
