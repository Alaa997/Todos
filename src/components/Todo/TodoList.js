import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useGlobalState, GlobalState } from "../../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
import useTodos from "./useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { inputValue, setInputValue, addTodoItem, todos } = useTodos();

  return (
    <div>
      <h3>TODO List</h3>
      <TextField
        label="New TODO"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{ marginRight: 1 }}
      />
      <Button variant="contained" onClick={addTodoItem}>
        Add
      </Button>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
