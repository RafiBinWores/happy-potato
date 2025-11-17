import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/home/HomePage"
import Menu from "./pages/menu/MenuPage"
import Location from "./pages/location/Location"
import AboutUs from "./pages/aboutUs/AboutUs"
import ContactPage from "./pages/contactUs/ContactPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="franchise-program" element={<Menu />} />
          <Route path="locations" element={<Location />} />
          <Route path="contact-us" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
