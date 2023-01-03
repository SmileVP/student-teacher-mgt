import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";
import EditUsers from "./components/EditUsers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* to provide routing */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/add-users" element={<AddUsers />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/edit-users/:id" element={<EditUsers />} />
          <Route path="*" element={<Navigate to="/all-users" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
