import React, { useState, useEffect } from "react";
import ReadTodo from "./components/Read";
import CreateTodo from "./components/Create";
import axios from "axios";
import { API_BASE_URL } from "./URL";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Function to fetch todos from the server
  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      if (Array.isArray(response.data)) {
        setTodos(response.data);
      } else {
        console.error("Data received is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []); // Fetch todos when the component mounts

  return (
    <div>
      {/* create todos */}
      <CreateTodo fetchTodos={fetchTodos} />
      <hr />
      <div className="mb-3"></div>
      {/* Display todos */}
      <ReadTodo todos={todos} fetchTodos={fetchTodos} />{" "}
    </div>
  );
};

export default TodoList;
