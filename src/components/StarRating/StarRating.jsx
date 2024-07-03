import React, { useState } from "react";
import "./StarRating.css";

const StarRating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => onRatingChange(ratingValue)}
            />
            <svg
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              height="25"
              width="25"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.388 2.833 8.718-7.416-5.387-7.417 5.387 2.833-8.718-7.417-5.388h9.167z" />
            </svg>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
