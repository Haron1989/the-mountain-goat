
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { GoatRegister } from "./pages/GoatRegister";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/goats" element={<GoatRegister />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
