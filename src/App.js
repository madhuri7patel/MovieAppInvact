import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddEditMoviePage from "./components/AddEditPage";
import MovieDetailsPage from "./components/MovieDetailPage/MoviedetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEditMoviePage />} />
        <Route path="/edit/:id" element={<AddEditMoviePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
