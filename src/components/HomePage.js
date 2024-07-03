import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../redux/movieSlice";
import MovieCard from "./MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const movies = useSelector((state) => state.movies.list);

  return (
    <section style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: 25,
        }}
      >
        <h1>Movie Watchlist</h1>
        <button onClick={() => navigation("/add")} className="edit-button">
          Add New Movie
        </button>
      </div>
      <div className="container">
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDelete={(id) => dispatch(deleteMovie(id))}
              onEdit={(id) => navigation(`/edit/${id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
