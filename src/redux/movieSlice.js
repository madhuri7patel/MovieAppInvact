import { createSlice } from "@reduxjs/toolkit";
import MovieData from "../data/movie.json";

// Movie slice
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: MovieData,
    status: "idle", // Changed from null to 'idle' to represent the initial state more clearly
    error: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.list.push(action.payload);
    },
    editMovie: (state, action) => {
      const index = state.list.findIndex(
        (movie) => movie.id == action.payload.id
      );
      if (index !== -1) {
        state.list[index] = {
          ...state.list[index],
          ...action.payload,
        };
      }
    },
    deleteMovie: (state, action) => {
      state.list = state.list.filter((movie) => movie.id !== action.payload);
    },
    addReview: (state, action) => {
      const index = state.list.findIndex(
        (movie) => movie.id == action.payload.id
      );

      if (index !== -1) {
        state.list[index]?.reviews?.push(action.payload.review);
      }
    },
    toggleWatchStatus: (state, action) => {
      const index = state.list.findIndex(
        (movie) => movie.id === action.payload
      );
      if (index !== -1) {
        state.list[index].watched = !state.list[index].watched;
      }
    },
  },
});

export const {
  addMovie,
  editMovie,
  deleteMovie,
  toggleWatchStatus,
  addReview,
} = movieSlice.actions;

export default movieSlice.reducer;
