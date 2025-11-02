import { Outlet } from "react-router"
import Navbar from "../components/navbar/Navbar"

const MainLayout = () => {
  return (
    <>
    <Navbar />

    <main className="bg-slate-50">
        <Outlet />
    </main>
    </>
  )
}

export default MainLayout