
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import EditorPage from './pages/EditorPage.jsx';
import './App.css';
import "./styles/Theme.css";
import { useState,useEffect } from "react";
function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {document.body.className = theme;},[theme]);
  return (
    <div className="{theme}">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login theme={theme} setTheme={setTheme} />} />
          <Route path="/Signup" element={<Signup theme={theme} setTheme={setTheme} />} />
          <Route path="/editor" element={<EditorPage theme={theme} setTheme={setTheme} />} />
        </Routes></BrowserRouter>
    </div>


  );
}

export default App;
