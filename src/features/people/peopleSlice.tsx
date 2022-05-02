import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../constants/api";

interface Person {
  name?: string,
  height?: string,
  mass?: string,
  hair_color?: string,
  eye_color?: string,
  birth_year?: string,
  gender?: string,
}

interface People {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Person[];
}

interface State {
  people: People;
  person: Person;
  page: number;
}

const initialState: State = {
  people: {},
  person: {},
  page: 1,
};

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async (page: number) => {
    try {
      const response = await axios(
        `${BASE_URL}/people/?page=${page}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchPerson = createAsyncThunk(
  "people/fetchPerson",
  async (personId:string|undefined) => {
    try {
      const response = await axios(`${BASE_URL}/people/${personId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    increase: (state) => {
      state.people?.next
        ? (state.page = state.page + 1)
        : (state.page = state.page);
    },
    decrease: (state) => {
      state.people?.previous
        ? (state.page = state.page - 1)
        : (state.page = state.page);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.people = action.payload;
    });
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      state.person = action.payload;
    });
  },
});

export const { decrease, increase } = peopleSlice.actions;

export default peopleSlice.reducer;
