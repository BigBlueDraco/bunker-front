import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
