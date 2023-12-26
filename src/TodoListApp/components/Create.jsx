import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../URL";

const CreateTodo = ({ fetchTodos }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCompletedChange = (e) => {
    setCompleted(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}`, {
        title,
        completed,
      });

      console.log("New task added:", response.data);

      // Clear the form after successful submission
      setTitle("");
      setCompleted(false);

      // Call fetchTodos passed as a prop to update the list
      fetchTodos();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="completed"
            checked={completed}
            onChange={handleCompletedChange}
          />
          <label className="form-check-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
