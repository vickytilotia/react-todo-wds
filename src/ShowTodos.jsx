import React from "react";

const ShowTodos = ({ todos, setTodos, deleteTodo, toggleTodo }) => {
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.todo}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShowTodos;
