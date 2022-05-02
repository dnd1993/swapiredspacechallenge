import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { List, Container, Stack } from "@mui/material";
import { fetchPeople } from "../../features/people/peopleSlice";
import { decrease, increase } from "../../features/people/peopleSlice";
import { getPersonAPIId } from "../../utils/urlBuilders";
import PaginationButton from "../../components/Buttons/PaginationButton";
import PeopleListItem from "../../components/ListItems/PeopleListItem";

const People = () => {
  const { people, page } = useAppSelector((store) => store.people);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPeople(page));
  }, [page]);

  return (
    <>
      {people && (
        <Container>
          <Stack>
            <List
              style={{
                minHeight: "57.6rem",
                backgroundColor: "rgb(245,245,245)",
              }}
            >
              {people.results?.map(({ name }, i) => (
                <PeopleListItem
                  key={name}
                  link={`/people/${getPersonAPIId(i, page)}`}
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
              itemsList={people}
              handleClick={() => dispatch(decrease())}
              name="Previous Page"
              type="previous"
            />
            <PaginationButton
              itemsList={people}
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

export default People;
