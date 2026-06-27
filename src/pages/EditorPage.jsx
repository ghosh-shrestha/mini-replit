import Navbar from '../components/Navbar.jsx';
import Output from '../components/Output.jsx';
import CodeEditor from '../components/CodeEditor.jsx';
import "../EditorPage.css";
import { useEffect, useState } from 'react';
import { codeTemplates } from '../constants/codeTemplates';
function EditorPage({ theme, setTheme }) {
    const [output, setOutput] = useState("No output yet..");
    const [language, setLanguage] = useState("C");
    const [code, setCode] = useState("//write your code here");
    const [savedCodes, setSavedCodes] = useState(codeTemplates);
    const handleClear = () => {
        setCode("");
        setOutput("");
        localStorage.removeItem("saved code");

    };
    const handleSave = () => {
        localStorage.setItem("savedCode", code);
    };
    useEffect(() => {
        const savedCode = localStorage.getItem("savedCode");
        if (savedCode) {
            setCode(savedCode);
        }
    }, []);
    return (<div className='editor-page'>
        <Navbar
            runCode={() => setOutput("Code executed successfully")} />
        <div className='editor-header'>
            <h1>Mini-Replit</h1>
            <div className='navbar-actions'>
                <div className="editor-toolbar">

                    <button className="tool-btn">▶ Run</button>

                    <button className="tool-btn" onClick={handleSave}>💾 Save</button>

                    <button className="tool-btn" onClick={handleClear}>🗑 Clear</button>

                    <button className="tool-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? "🌙dark" : "🌞Light"}</button>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)} className='language-select'>
                        <option value="C">C</option>
                        <option value="C++">Cpp</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                    </select></div>
            </div>
        </div>

        <div className='editor-container'>

            <div className='code-area'><CodeEditor language={language} code={code} setCode={setCode} savedCodes={savedCodes} setSavedCodes={setSavedCodes} /></div>
        </div>
        <hr></hr>
        <div className='terminal'>
            <div className='terminal-header'>
                <span>Terminal</span>
            </div>
            <div className='output-box'>
                <Output output={output} />
            </div>
        </div>

    </div>);
}

export default EditorPage;