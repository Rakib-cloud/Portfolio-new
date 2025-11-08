import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

const App = () => {
  return (
    <Router>
      <div className="bg-[#050414] w-full min-h-screen overflow-x-hidden relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
