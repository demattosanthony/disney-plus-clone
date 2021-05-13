import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initalState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
