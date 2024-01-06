import React from "react";
import DeleteTodo from "./Delete";
import UpdateTodo from "./Update";

const ReadTodo = ({ todos, fetchTodos }) => {
  return (
    <div className="container mt-4">
      <h2>Todo List</h2>
      {Array.isArray(todos) && todos.length > 0 ? (
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Completed" : "Pending"}</td>
                <td>
                  <div className="btn-group justify-content-end" role="group">
                    <UpdateTodo
                      todoId={todo.id}
                      title={todo.title}
                      completed={todo.completed}
                      fetchTodos={fetchTodos}
                    />
                    <div className="mx-2"></div>
                    <DeleteTodo fetchTodos={fetchTodos} todoId={todo.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
};

export default ReadTodo;
