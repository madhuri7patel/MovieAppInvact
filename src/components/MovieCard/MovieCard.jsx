// components/MovieCard.tsx
import React from "react";
import "./MovieCard.css";
import Toggle from "../Toggle/Toggle";
import { useDispatch } from "react-redux";
import { editMovie, toggleWatchStatus } from "../../redux/movieSlice";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, onEdit, onDelete }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleToggle = () => {
    dispatch(toggleWatchStatus(movie.id));
  };

  return (
    <div className="movie-card">
      <div className="movie-details">
        <h3
          className="movie-title"
          onClick={() => Navigate(`/movie/${movie.id}`)}
        >
          {movie.title}
        </h3>
        <p className="movie-genre">{movie.genre}</p>
        <Toggle
          isChecked={movie.watched}
          onToggle={handleToggle}
          style={{ marginBottom: 10 }}
        />
        <div className="button-group">
          <button onClick={() => onEdit(movie.id)} className="edit-button">
            Edit
          </button>
          <button onClick={() => onDelete(movie.id)} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
