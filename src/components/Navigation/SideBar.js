import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {["Home", "Todo", "About"].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to={
              text === "Home"
                ? "/"
                : `/${text.replace(/\s+/g, "").toLowerCase()}`
            }
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
