import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchPlanet } from "../../features/planets/planetsSlice";
import { useParams } from "react-router-dom";
import { Stack, List } from "@mui/material";
import ItemHeader from "../../components/Headers/ItemHeader";
import DetailsItem from "../../components/ListItems/DetailsItem";

const Planet = () => {
  const { planet, page } = useAppSelector((store) => store.planets);
  const dispatch = useAppDispatch();
  const { planetId } = useParams();
  useEffect(() => {
    dispatch(fetchPlanet(planetId));
  }, []);
  return (
    <>
      {planet && (
        <Stack>
          <ItemHeader header={planet.name} />
          <List>
            <DetailsItem header="Title" value={planet.name} />
            <DetailsItem header="Terrain" value={planet.terrain} />
            <DetailsItem header="Population" value={planet.population} />
          </List>
        </Stack>
      )}
    </>
  );
};

export default Planet;
