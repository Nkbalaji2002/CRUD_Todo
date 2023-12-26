import React from "react";
import axios from "axios";
import { API_BASE_URL } from "../URL";

const DeleteTodo = ({ todoId, fetchTodos }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/${todoId}`);
      // After deletion, update the list of todos
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <button className="btn btn-danger btn-sm" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteTodo;
