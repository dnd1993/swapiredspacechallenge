import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { List, Container, Stack } from "@mui/material";
import { fetchPlanets } from "../../features/planets/planetsSlice";
import { decrease, increase } from "../../features/planets/planetsSlice";
import { getPlanetsAPIId } from "../../utils/urlBuilders";
import BasicListItem from "../../components/ListItems/BasicListItem";
import PaginationButton from "../../components/Buttons/PaginationButton";

const Planets = () => {
  const { planets, page } = useAppSelector((store) => store.planets);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPlanets(page));
  }, [page]);
  return (
    <>
      {planets && (
        <Container>
          <Stack>
            <List
              style={{
                minHeight: "57.6rem",
                backgroundColor: "rgb(245,245,245)",
              }}
            >
              {planets.results?.map(({ name }, i) => (
                <BasicListItem
                  key={name}
                  link={`/planets/${getPlanetsAPIId(i, page)}`}
                  name={name}
                />
              ))}
            </List>
          </Stack>
          <Stack
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <PaginationButton
              itemsList={planets}
              handleClick={() => dispatch(decrease())}
              name="Previous Page"
              type="previous"
            />
            <PaginationButton
              itemsList={planets}
              handleClick={() => dispatch(increase())}
              name="Next Page"
              type="next"
            />
          </Stack>
        </Container>
      )}
    </>
  );
};

export default Planets;
