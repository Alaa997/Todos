import React from "react";
import { Button, ListItem, ListItemText, Checkbox, TextField } from "@mui/material";
import useTodos from "./useTodos";

const TodoItem = ({ todo }) => {
  const {
    isEditing,
    startEdit,
    deleteTodo,
    toggleComplete,
    saveEdit,
    editText,
    setEditText,
  } = useTodos();

  return (
    <ListItem dense>
      {isEditing === todo.id ? (
        <>
          <TextField
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            sx={{ marginRight: 1 }}
          />
          <Button onClick={() => saveEdit(todo.id)}>Save</Button>
        </>
      ) : (
        <>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            onChange={() => toggleComplete(todo.id)}
          />
          <ListItemText
            primary={todo.text}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          />
          <Button onClick={() => startEdit(todo.id, todo.text)}>Edit</Button>
          <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
