import Editor from '@monaco-editor/react';
import { useEffect } from 'react';
function CodeEditor({language,code,setCode,savedCodes,setSavedCodes}){
    useEffect(() => {
        setCode(savedCodes[language]);
    },[language,savedCodes,setCode]);
    const languageMap = {
        "C":"c",
        "C++":"cpp",
        "Java":"java",
        "Python":"python"

    };
    return(<div>
        <h3>Code Editor</h3>
        <Editor height="400px"
        width="350px"
        language={languageMap[language]}
        value={code}
        onChange={(value)=>{setCode(value);
            setSavedCodes((prev) => ({
                ...prev,
                [language]:value,
            }));
        }}
        theme="vs-dark"/>
    </div>);

}
export default CodeEditor;