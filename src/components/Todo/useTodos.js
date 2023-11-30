import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useGlobalState, GlobalState } from "../../context/GlobalState";

const useTodos = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState("");
  const globalState = useGlobalState();

  const addTodoItem = () => {
    if (inputValue.trim() !== "") {
      // Update global state with the new todo item
      const newTodo = { id: uuidv4(), text: inputValue, completed: false };
      GlobalState.set({
        todos: [...globalState.todos, newTodo],
      });
      setInputValue("");
    }
  };

  const startEdit = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    const updatedTodos = globalState.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editText };
      }
      return todo;
    });

    GlobalState.set({ todos: updatedTodos });
    setIsEditing(null);
    setEditText("");
  };

  const toggleComplete = (id) => {
    const updatedTodos = globalState.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    GlobalState.set({ todos: updatedTodos });
  };

  const deleteTodo = (id) => {
    const updatedTodos = globalState.todos.filter((todo) => todo.id !== id);
    GlobalState.set({ todos: updatedTodos });
  };

  return {
    inputValue,
    setInputValue,
    isEditing,
    setIsEditing,
    editText,
    setEditText,
    addTodoItem,
    saveEdit,
    startEdit,
    deleteTodo,
    toggleComplete,
    todos: globalState.todos,
  };
};

export default useTodos;
