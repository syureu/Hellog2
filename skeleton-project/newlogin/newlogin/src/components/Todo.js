import React, { useState, useEffect } from "react";
const Todo = ({ setHasCookie, removeCookie }) => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const getAllTodoApi = () => {
      return new Promise((resolve, reject) => {
        fetch("/todos", {
          signal: signal,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer",
          },
        });
        // .then((res) => resolve(res.json()))
        // .catch((err) => reject(err));
      });
    };
    const onTodoLoad = async () => {
      try {
        const response = await getAllTodoApi();
        if (response.error === "token expired") {
          setHasCookie(false);
        } else {
          setTodos(response.todos);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (!todos) {
      onTodoLoad();
    }
    return () => {
      abortController.abort();
    };
  }, [todos, setHasCookie]);
  return (
    <div>
      <h2>Complete Login Todo</h2>
      <button type="button" onClick={removeCookie}>
        logout
      </button>
    </div>
  );
};
export default Todo;
