import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import RootSEO from "../components/seo/RootSEO";

const MainLayout = () => {
  return (
    <>
      {/* Root seo */}
      <RootSEO />

      {/* Navbar */}
      <Navbar />

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
