import { Route, Routes } from "react-router"
import Navbar from "./components/navbar/Navbar"
import MainLayout from "./layouts/MainLayout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<MainLayout />} >
          <Route index element={<div>Home</div>} />
          <Route path="menu" element={<div>Menu</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
