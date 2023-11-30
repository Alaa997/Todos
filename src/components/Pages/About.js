import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AboutPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About the To-Do List App
        </Typography>

        <Typography variant="body1" gutterBottom>
          The To-Do List App is a simple, user-friendly application designed to
          help you manage your daily tasks efficiently.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Features:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Add, update, and delete tasks easily." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mark tasks as completed." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Responsive design for use on various devices." />
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom>
          Technologies Used:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="React.js for front-end development." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Material-UI for UI components and design." />
          </ListItem>
          <ListItem>
            <ListItemText primary="React Router for navigation management." />
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom>
          Developed by:
        </Typography>
        <Typography variant="body1">Alaa</Typography>
      </Paper>
    </Box>
  );
};

export default AboutPage;
