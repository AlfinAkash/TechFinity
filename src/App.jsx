import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import DSAIndex from "./components/DSA/DSAIndex";
import ArrayBasics from "./components/DSA/Array/ArrayBasics";
import ArrayMedium from "./components/DSA/Array/ArrayMedium";
import ArrayHard from "./components/DSA/Array/ArrayHard";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Layout component */}
        <Route path="/" element={<Layout />}>
          {/* Default route */}
          <Route index element={<DSAIndex />} />
          
          {/* DSA routes */}
          <Route path="dsa/array/basic" element={<ArrayBasics />} />
          <Route path="dsa/array/medium" element={<ArrayMedium />} />
          <Route path="dsa/array/hard" element={<ArrayHard />} />

          {/* Compiler route */}
         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
