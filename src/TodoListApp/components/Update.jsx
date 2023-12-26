import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../URL";

const UpdateTodo = ({ todoId, title: task, completed, fetchTodos }) => {
  const [updatedTitle, setUpdatedTitle] = useState(task);
  const [updatedCompleted, setUpdatedCompleted] = useState(completed);
  const [editMode, setEditMode] = useState(false); // State for edit mode

  const handleUpdate = async () => {
    try {
      await axios.put(`${API_BASE_URL}/${todoId}`, {
        title: updatedTitle,
        completed: updatedCompleted,
      });
      // After updating, refresh the list of todos
      fetchTodos();
      setEditMode(false); // Exit edit mode after update
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <>
      {!editMode ? ( // Render read mode
        <>
          <button className="btn btn-primary" onClick={() => setEditMode(true)}>
            Edit
          </button>
        </>
      ) : (
        // Render edit mode
        <>
          <input
            type="text"
            className="form-control" // Bootstrap form control class
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <div className="mx-2"></div>
          <>
            Completed:
            <div className="mx-1"> </div>
            <input
              type="checkbox"
              className="form-check-input" // Bootstrap form check input class
              checked={updatedCompleted}
              onChange={(e) => setUpdatedCompleted(e.target.checked)}
            />
          </>
          <div className="mx-2"></div>
          <button className="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
          <div className="mx-2"></div>
          <button
            className="btn btn-secondary"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
        </>
      )}
    </>
  );
};

export default UpdateTodo;
