import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Billing from "./pages/Billing";
import Reports from "./pages/Reports";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Billing />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;