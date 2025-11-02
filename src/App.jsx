import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/home/HomePage"
import Menu from "./pages/menu/MenuPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
