import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../constants/api";

interface Movie {
  title?: string,
  director?: string,
  producer?: string,
  release_date?: string,
}

interface Movies {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Movie[];
}

interface State {
  movies: Movies;
  movie: Movie;
}

const initialState: State = {
  movies: {},
  movie: {},
};

export const fetchMovies = createAsyncThunk("people/fetchMovies", async () => {
  try {
    const response = await axios(`${BASE_URL}/films/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchMovie = createAsyncThunk(
  "people/fetchPerson",
  async (movieId:string|undefined) => {
    try {
      const response = await axios(`${BASE_URL}/films/${movieId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
  },
});

export default moviesSlice.reducer;
