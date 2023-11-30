import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TodoPage from "./components/Pages/HomePage";
import SideBar from "./components/Navigation/SideBar";
import HomePage from "./components/Pages/HomePage";
import About from "./components/Pages/About";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
