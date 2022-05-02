import { Outlet } from "react-router-dom";
import SectionHeader from "../../components/Headers/SectionHeader";

const SharedMoviesLayout = () => {
  return (
    <>
      <SectionHeader header="Movies" />
      <Outlet />
    </>
  );
};

export default SharedMoviesLayout;
