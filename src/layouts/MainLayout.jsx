import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import FixedBg from "../components/fixedBg/FixedBg";
import Footer from "../components/footer/Footer";
import RootSEO from "../components/seo/RootSeo";

const MainLayout = () => {
  return (
    <>
      {/* Root seo */}
      <RootSEO />

      {/* Navbar */}
      <Navbar />

      {/* Fixed Background Image */}
      <FixedBg />

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
