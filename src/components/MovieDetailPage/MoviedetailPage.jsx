import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieDetailPage.css";
import {
  addReview,
  deleteMovie,
  editMovie,
  toggleWatchStatus,
} from "../../redux/movieSlice";
import Toggle from "../Toggle/Toggle";
import StarRating from "../StarRating/StarRating";

const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const Navigate = useNavigate();
  const movieId = params.id;
  const movie = useSelector((state) =>
    state.movies.list.find((m) => m.id == movieId)
  );

  const [review, setReview] = useState({
    user: "",
    comment: "",
  });

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
    Navigate("/");
  };

  const handleToggleWatchStatus = () => {
    dispatch(toggleWatchStatus(movie.id));
  };

  const handleRatingChange = (newRating) => {
    dispatch(editMovie({ ...movie, rating: newRating }));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    dispatch(addReview({ id: movie.id, review }));
    setReview({ user: "", comment: "" });
  };

  return (
    <div className="movie-detailss">
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-description">{movie.description}</p>
      <p className="movie-year-genre">{`${movie.releaseYear} | ${movie.genre}`}</p>
      <p className="movie-rating">Rating: {movie.rating}</p>
      <StarRating rating={movie.rating} onRatingChange={handleRatingChange} />
      <Toggle
        isChecked={movie.watched}
        onToggle={handleToggleWatchStatus}
        style={{ marginBottom: 10, marginTop: 10 }}
      />
      <div className="reviews">
        <h2>Reviews</h2>
        {movie?.reviews?.map((review, index) => (
          <div key={index} className="review">
            <p>
              <strong>{review.user}</strong>: {review.comment}
            </p>
          </div>
        ))}
        <form onSubmit={handleAddReview} className="add-review">
          <h3>Add Review</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={review?.user}
            onChange={(e) => setReview({ ...review, user: e.target.value })}
          />
          <textarea
            placeholder="Your Comment"
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
      <div className="movie-actions">
        <button onClick={() => Navigate(`/edit/${movie.id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
