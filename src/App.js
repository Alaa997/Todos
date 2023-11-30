import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/Navigation/SideBar";
import HomePage from "./components/Pages/HomePage";
import About from "./components/Pages/About";
import TodoPage from "./components/Pages/TodoPage";
import { Box } from "@mui/material";
import { Global } from "@emotion/react";

function App() {
  return (
    <Global
      Root={() => (
        <BrowserRouter>
          <Box sx={{ display: "flex" }}>
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/todo" element={<TodoPage />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Box>
          </Box>
        </BrowserRouter>
      )}
    />
  );
}

export default App;
