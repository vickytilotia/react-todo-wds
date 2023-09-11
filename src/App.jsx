import { useState, useEffect } from "react";
import "./App.css";
import NewForm from "./NewForm";
import ShowTodos from "./ShowTodos";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(newItem) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          todo: newItem,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, checked) {
    let allTodos = todos.slice();
    if (checked === true) {
      allTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
      });
      return setTodos(allTodos);
    } else {
      allTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = false;
        }
      });
      return setTodos(allTodos);
    }
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewForm addTodo={addTodo} />
      <ShowTodos
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </>
  );
}

export default App;
