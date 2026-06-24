import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Output from '../components/Output.jsx';
import CodeEditor from '../components/CodeEditor.jsx';
import {useState} from 'react';
function EditorPage() {
    const [output,setOutput] = useState("No output yet..");
    return (<div>
        <Navbar 
        runCode={() => setOutput("Code executed successfully")}/>
        <h1>Mini-Replit</h1>
        <hr></hr>
        <div style={{display:"flex",gap:"30px"}}>
            <Sidebar/>

            <CodeEditor/>
        </div>
        <hr></hr>
        <div>
            <Output output={output}/>
        </div>
    </div>);
}
export default EditorPage;