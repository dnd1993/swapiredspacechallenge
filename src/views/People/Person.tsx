import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchPerson } from "../../features/people/peopleSlice";
import { useParams } from "react-router-dom";
import { Stack, List } from "@mui/material";
import ItemHeader from "../../components/Headers/ItemHeader";
import DetailsItem from "../../components/ListItems/DetailsItem";

const Person = () => {
  const { person, page } = useAppSelector((store) => store.people);
  const dispatch = useAppDispatch();
  const { personId } = useParams();
  useEffect(() => {
    dispatch(fetchPerson(personId));
  }, []);
  return (
    <>
      {person && (
        <Stack>
          <ItemHeader header={person.name} />
          <List>
            <DetailsItem header="Height" value={person.height} />
            <DetailsItem header="Mass" value={person.mass} />
            <DetailsItem header="Hair Color" value={person.hair_color} />
            <DetailsItem header="Eye Color" value={person.eye_color} />
            <DetailsItem header="Birth Year" value={person.birth_year} />
            <DetailsItem header="Gender" value={person.gender} />
          </List>
        </Stack>
      )}
    </>
  );
};

export default Person;
