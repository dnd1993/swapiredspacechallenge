import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./features/people/peopleSlice";
import moviesReducer from "./features/movies/moviesSlice";
import planetsReducer from "./features/planets/planetsSlice";

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    movies: moviesReducer,
    planets: planetsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
