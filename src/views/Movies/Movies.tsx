import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { List, Container, Stack } from "@mui/material";
import { fetchMovies } from "../../features/movies/moviesSlice";
import BasicListItem from "../../components/ListItems/BasicListItem";

const Movies = () => {
  const { movies } = useAppSelector((store) => store.movies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return (
    <>
      {movies && (
        <Container>
          <Stack>
            <List
              style={{
                minHeight: "57.6rem",
                backgroundColor: "rgb(245,245,245)",
              }}
            >
              {movies.results?.map(({ title }, i) => (
                <BasicListItem
                  key={title}
                  link={`/movies/${i + 1}`}
                  name={title}
                />
              ))}
            </List>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default Movies;
