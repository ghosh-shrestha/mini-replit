
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import EditorPage from './pages/EditorPage.jsx';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes></BrowserRouter>

  );
}

export default App;
