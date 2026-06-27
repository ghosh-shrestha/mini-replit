import Editor from '@monaco-editor/react';
import { useEffect } from 'react';
function CodeEditor({ language, code, setCode, savedCodes, setSavedCodes }) {
    useEffect(() => {
        setCode(savedCodes[language]);
    }, [language, savedCodes, setCode]);

    const languageMap = {
        "C": "c",
        "C++": "cpp",
        "Java": "java",
        "Python": "python"

    };
    return (<div className='editor-wrapper'>
        <Editor
            width="100%"
            height="500px"
            options={{
                automaticLayout: true,
                minimap: { enabled: false },
            }}
            language={languageMap[language]}
            value={code}
            onChange={(value) => {
                setCode(value);
                setSavedCodes((prev) => ({
                    ...prev,
                    [language]: value,
                }));
            }}
            theme="vs-dark"
        />
    </div>);

}
export default CodeEditor;