import React, { useState } from "react";
import axios from "axios";
import "./Compiler.css";

const Compiler = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("java");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Language version mapping
  const languageVersions = {
    java: "3",
    c: "5",
    cpp: "5",
    python3: "4",
    javascript: "4",
  };

  const handleCompile = async () => {
    if (!code.trim()) {
      setOutput("Please write some code to compile.");
      return;
    }

    setIsLoading(true);
    setOutput("");

    try {
      const response = await axios.post(
        `https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute`,
        {
          clientId: import.meta.env.VITE_JDOODLE_CLIENT_ID,
          clientSecret: import.meta.env.VITE_JDOODLE_CLIENT_SECRET,
          script: code,
          language: language,
          versionIndex: languageVersions[language],
        }
      );

      setOutput(response.data.output || "No output");
    } catch (error) {
      console.error("Compilation error:", error);
      setOutput("Error: Unable to compile the code.");
    }

    setIsLoading(false);
  };

  return (
    <div className="compiler-container">
      <h2>Online Compiler</h2>

      <div className="controls">
        <label>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="python3">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      />

      <button onClick={handleCompile} disabled={isLoading}>
        {isLoading ? "Compiling..." : "Run Code"}
      </button>

      <div className="output-container">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default Compiler;
