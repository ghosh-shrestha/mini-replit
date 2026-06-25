
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
      <button onClick={() => setTheme(theme === "light"?"dark":"light")}>Toggle Theme</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes></BrowserRouter>
    </div>


  );
}

export default App;
