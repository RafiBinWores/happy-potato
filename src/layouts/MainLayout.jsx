import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import FixedBg from "../components/fixedBg/FixedBg";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Fixed Background Image */}
      <FixedBg />

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
