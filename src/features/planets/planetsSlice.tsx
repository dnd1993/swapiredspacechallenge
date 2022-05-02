import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../constants/api";

interface Planet {
  name?: string,
  terrain?: string,
  population?: string,
}

interface Planets {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Planet[];
}

interface State {
  planets: Planets;
  planet: Planet;
  page: number;
}

const initialState: State = {
  planets: {},
  planet: {},
  page: 1,
};

export const fetchPlanets = createAsyncThunk(
  "people/fetchPlanets",
  async (page:number) => {
    try {
      const response = await axios(
        `${BASE_URL}/planets/?page=${page}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchPlanet = createAsyncThunk(
  "people/fetchPerson",
  async (planetId:string|undefined) => {
    try {
      const response = await axios(`${BASE_URL}/planets/${planetId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    increase: (state) => {
      state.planets?.next
        ? (state.page = state.page + 1)
        : (state.page = state.page);
    },
    decrease: (state) => {
      state.planets?.previous
        ? (state.page = state.page - 1)
        : (state.page = state.page);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      state.planets = action.payload;
    });
    builder.addCase(fetchPlanet.fulfilled, (state, action) => {
      state.planet = action.payload;
    });
  },
});

export const { decrease, increase } = planetsSlice.actions;

export default planetsSlice.reducer;
