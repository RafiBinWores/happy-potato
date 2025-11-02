import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Franchising", path: "/franchising" },
    { name: "Location", path: "/locations" },
    { name: "Contact Us", path: "/contact" },
    { name: "Career", path: "/career" },
  ];

  return (
    <>
      <header className="bg-primary text-white">
        <div className="c-space py-2">
          <nav className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2">
              <img
                src="./assets/images/logo/logo.png"
                alt="Logo"
                className="h-12"
              />
              <span className="sr-only">Happy Potato Bangladesh</span>
            </NavLink>

            <div className="hidden md:flex items-center gap-11 uppercase font-heading">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="hover:text-secondary/90 transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="">
              <img
                src="./assets/images/button_happy_potato.gif"
                alt=""
                className="w-[200px] hidden lg:inline-block"
              />

              <button
                onClick={toggleSidebar}
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-controls="mobileSidebar"
                aria-expanded={sidebarOpen}
              >
                <span className="sr-only">Open main menu</span>
                <Menu size={28} />
              </button>
            </div>
          </nav>
        </div>

        <div className="bg-secondary h-3"></div>
      </header>

      {/* Off-canvas Sidebar for Mobile */}
      <div id="sidebarRoot">
        {/* Backdrop */}
        <div
          onClick={closeSidebar}
          className={`fixed inset-0 bg-black/50 transition-opacity z-40 ${
            sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* Drawer */}
        <aside
          className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white text-zinc-800 transform transition-transform z-50 md:hidden ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobileSidebarTitle"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <img src="./assets/images/logo/logo.png" alt="Logo" className="h-10" />
            </div>
            <button
              onClick={closeSidebar}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="px-4 py-4 uppercase font-heading space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block rounded px-3 py-2 hover:bg-zinc-100 ${
                    isActive ? "bg-zinc-100 text-primary font-semibold" : ""
                  }`
                }
                onClick={closeSidebar}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-3">
              <img
                src="./assets/images/button_happy_potato.gif"
                alt=""
                className="w-full"
              />
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
