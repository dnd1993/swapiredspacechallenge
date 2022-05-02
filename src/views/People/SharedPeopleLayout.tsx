import { Outlet } from "react-router-dom";
import SectionHeader from "../../components/Headers/SectionHeader";

const SharedPeopleLayout = () => {
  return (
    <>
      <SectionHeader header="People" />
      <Outlet />
    </>
  );
};

export default SharedPeopleLayout;
