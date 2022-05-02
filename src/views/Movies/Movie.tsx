import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchMovie } from "../../features/movies/moviesSlice";
import { useParams } from "react-router-dom";
import { Stack, List } from "@mui/material";
import ItemHeader from "../../components/Headers/ItemHeader";
import DetailsItem from "../../components/ListItems/DetailsItem";

const Movie = () => {
  const { movie } = useAppSelector((store) => store.movies);
  const dispatch = useAppDispatch();
  const { movieId } = useParams();
  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, []);
  return (
    <>
      {movie && (
        <Stack>
          <ItemHeader header={movie.title} />
          <List>
            <DetailsItem header="Title" value={movie.title} />
            <DetailsItem header="Director" value={movie.director} />
            <DetailsItem header="Producers" value={movie.producer} />
            <DetailsItem header="Release Date" value={movie.release_date} />
          </List>
        </Stack>
      )}
    </>
  );
};

export default Movie;
