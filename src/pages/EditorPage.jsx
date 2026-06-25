import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Output from '../components/Output.jsx';
import CodeEditor from '../components/CodeEditor.jsx';
import "../EditorPage.css";
import {useState} from 'react';
import {codeTemplates} from '../constants/codeTemplates';
function EditorPage() {
    const [output,setOutput] = useState("No output yet..");
    const [language,setLanguage] = useState("C");
    const[code,setCode] = useState("//write your code here");
    const[savedCodes,setSavedCodes] = useState(codeTemplates);
    return (<div>
        <Navbar 
        runCode={() => setOutput("Code executed successfully")}/>
        <h1>Mini-Replit</h1>
        <select value={language} onChange={(e)=> setLanguage(e.target.value)}>
            <option value="C">C</option>
            <option value="C++">Cpp</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
        </select>
        <hr></hr>
        <div className='editor-container'>
            <div className='sidebar'><Sidebar/></div>

            <div className='code-area'><CodeEditor language={language} code={code} setCode={setCode} savedCodes={savedCodes} setSavedCodes={setSavedCodes}/></div>
        </div>
        <hr></hr>
        <div className='output-box'>
            <Output output={output}/>
        </div>
    </div>);
}
export default EditorPage;