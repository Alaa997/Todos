import { Button, Checkbox, List, ListItem, ListItemText, TextField } from "@mui/material";
import React from "react";
import { useGlobalState, GlobalState } from "../../context/GlobalState";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [inputValue, setInputValue] = React.useState("");
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
        {globalState.todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
            }
          >
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              onChange={() => toggleComplete(todo.id)}
            />
            <ListItemText
              primary={todo.text}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
