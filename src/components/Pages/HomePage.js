import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the To-Do List App!
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Typography variant="body1" gutterBottom>
          This simple and intuitive app helps you keep track of your daily
          tasks. Add new tasks, mark them as completed, and delete tasks that
          are no longer relevant. Managing your day-to-day activities has never
          been easier!
        </Typography>
        <Typography variant="body1">
          Get started by navigating to the 'Todo' page to add your first task.
        </Typography>
      </Paper>
    </Box>
  );
};

export default HomePage;
