import { Outlet } from "react-router-dom";
import SectionHeader from "../../components/Headers/SectionHeader";

const SharedPlanetsLayout = () => {
  return (
    <>
      <SectionHeader header="Planets" />
      <Outlet />
    </>
  );
};

export default SharedPlanetsLayout;
