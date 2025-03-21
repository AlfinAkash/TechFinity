import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import DSAIndex from "./components/DSA/DSAIndex";
import ArrayBasics from "./components/DSA/Array/ArrayBasics";
import ArrayMedium from "./components/DSA/Array/ArrayMedium";
import ArrayHard from "./components/DSA/Array/ArrayHard";
import Compiler from "./components/Compiler/Compiler";  // Import the Compiler

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DSAIndex />} />
          <Route path="dsa/array/basic" element={<ArrayBasics />} />
          <Route path="dsa/array/medium" element={<ArrayMedium />} />
          <Route path="dsa/array/hard" element={<ArrayHard />} />
          <Route path="compiler" element={<Compiler />} />   {/* Compiler Route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
