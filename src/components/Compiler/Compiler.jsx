import React, { useState } from "react";
import { Button, CircularProgress, Typography, Paper, FormControl, MenuItem, Select, InputLabel, Snackbar } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { compileCode } from "../../api/jdoodleProxy";
import MonacoEditor from '@monaco-editor/react';  // Correct import
import '../../components/Compiler/Compiler.css';

const Compiler = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("java");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [openSnack, setOpenSnack] = useState(false);

  const languageVersions = {
    java: "3",
    c: "5",
    cpp: "5",
    python3: "4",
    javascript: "4",
  };

  const handleCompile = async () => {
    if (!code.trim()) {
      setSnackMessage("Please write some code to compile.");
      setOpenSnack(true);
      return;
    }

    setIsLoading(true);
    setOutput("");

    try {
      const clientId = process.env.REACT_APP_JDOODLE_CLIENT_ID;
      const clientSecret = process.env.REACT_APP_JDOODLE_CLIENT_SECRET;

      const data = await compileCode(
        code,
        language,
        languageVersions[language],
        clientId,
        clientSecret
      );

      setOutput(data.output || "No output returned.");
    } catch (error) {
      setSnackMessage("Error: Unable to compile the code.");
      setOpenSnack(true);
    }

    setIsLoading(false);
  };

  const handleSnackClose = () => {
    setOpenSnack(false);
  };

  return (
    <Paper className="compiler-container" elevation={3} sx={{ padding: 3, maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#333' }}>
        🚀 Online Code Compiler
      </Typography>

      {/* Controls Container (Stacked in Column) */}
      <div className="controls" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <FormControl fullWidth>
          <InputLabel>Language</InputLabel>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            label="Language"
            sx={{ width: '200px' }}
          >
            <MenuItem value="java">Java</MenuItem>
            <MenuItem value="c">C</MenuItem>
            <MenuItem value="cpp">C++</MenuItem>
            <MenuItem value="python3">Python</MenuItem>
            <MenuItem value="javascript">JavaScript</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          startIcon={isLoading ? <CircularProgress size={24} /> : <PlayArrowIcon />}
          onClick={handleCompile}
          disabled={isLoading}
          sx={{
            height: '48px', // Consistent button height
            width: '100%',  // Make button full-width
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#0069d9',
              transform: 'scale(1.05)',
            },
            '&:disabled': {
              backgroundColor: '#bdbdbd',
            }
          }}
        >
          {isLoading ? "Compiling..." : "Run Code"}
        </Button>
      </div>

      {/* Monaco Editor for Code Input */}
      <MonacoEditor
        height="400px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        options={{
          selectOnLineNumbers: true,
          automaticLayout: true,
          wordWrap: "on",
          fontSize: 16,
          lineNumbers: "on",
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />

      {/* Output Section */}
      <div className="output" style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: '8px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Output:</Typography>
        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '1.1rem' }}>{output}</pre>
      </div>

      {/* Snack Message */}
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        message={snackMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{ marginBottom: '70px' }}
      />
    </Paper>
  );
};

export default Compiler;
