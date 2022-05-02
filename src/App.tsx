import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home";
import SharedLayout from "./views/Home/SharedLayout";
import SharedMoviesLayout from "./views/Movies/SharedMoviesLayout";
import SharedPeopleLayout from "./views/People/SharedPeopleLayout";
import SharedPlanetsLayout from "./views/Planets/SharedPlanetsLayout";
import Error from "./views/Handlers/Error";
import "./App.css";
const People = React.lazy(() => import("./views/People/People"));
const Person = React.lazy(() => import("./views/People/Person"));
const Movies = React.lazy(() => import("./views/Movies/Movies"));
const Movie = React.lazy(() => import("./views/Movies/Movie"));
const Planets = React.lazy(() => import("./views/Planets/Planets"));
const Planet = React.lazy(() => import("./views/Planets/Planet"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="people" element={<SharedPeopleLayout />}>
            <Route
              index
              element={
                <React.Suspense fallback="Loading...">
                  <People />
                </React.Suspense>
              }
            />
            <Route
              path=":personId"
              element={
                <React.Suspense fallback="Loading...">
                  <Person />
                </React.Suspense>
              }
            />
          </Route>

          <Route path="movies" element={<SharedMoviesLayout />}>
            <Route
              index
              element={
                <React.Suspense fallback="Loading...">
                  <Movies />
                </React.Suspense>
              }
            />
            <Route
              path=":movieId"
              element={
                <React.Suspense fallback="Loading...">
                  <Movie />
                </React.Suspense>
              }
            />
          </Route>

          <Route path="planets" element={<SharedPlanetsLayout />}>
            <Route
              index
              element={
                <React.Suspense fallback="Loading...">
                  <Planets />
                </React.Suspense>
              }
            />
            <Route
              path=":planetId"
              element={
                <React.Suspense fallback="Loading...">
                  <Planet />
                </React.Suspense>
              }
            />
          </Route>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
