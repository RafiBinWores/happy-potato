import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import ImageUpload from "../image/ImageUpload";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About Us", path: "/about-us" },
        { name: "Franchising", path: "/franchising" },
        { name: "Locations", path: "/locations" },
        { name: "Contact Us", path: "/contact" },
        { name: "Career", path: "/career" },
    ];

    return (
        <>
            <header className="bg-primary text-white sticky top-0 z-50">
                <div className="c-space py-2">
                    <nav className="flex items-center justify-between">
                        <NavLink to="/" className="flex items-center gap-2">
                            <ImageUpload
                                src="logo.png"
                                alt="Logo"
                                className="h-8 md:h-9 lg:h-12"
                            />
                            <span className="sr-only">Happy Potato Bangladesh</span>
                        </NavLink>

                        <div className="hidden lg:flex items-center gap-11 uppercase font-heading">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `relative group hover:text-secondary gap-2 transition-colors ${isActive ? "text-secondary" : ""}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <img
                                                src="assets/images/icon/menu-icon.png"
                                                alt="Menu icon"
                                                className={
                                                    "absolute -left-6 transform transition-all duration-200 " +
                                                    "opacity-0 -translate-y-3 " +
                                                    "group-hover:opacity-100 group-hover:translate-y-0 " +
                                                    (isActive ? "opacity-100 translate-y-0" : "")
                                                }
                                                aria-hidden
                                            />
                                            {link.name}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>

                        <div className="">
                            <ImageUpload
                                src="button_happy_potato.gif"
                                alt="Happy Potato Gif"
                                className="w-[200px] hidden lg:inline-block"
                            />

                            <button
                                onClick={toggleSidebar}
                                className="lg:hidden inline-flex items-center justify-center rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                                aria-controls="mobileSidebar"
                                aria-expanded={sidebarOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Menu size={28} />
                            </button>
                        </div>
                    </nav>
                </div>

                <div className="bg-secondary h-1 lg:h-3"></div>
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
                    className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white text-zinc-800 transform transition-transform z-50 lg::hidden ${
                        sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="mobileSidebarTitle"
                >
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                        <div className="flex items-center gap-2">
                            <ImageUpload src="logo.png" alt="Logo" className="h-10" />
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
                                        isActive ? "bg-zinc-100 text-secondary font-semibold" : ""
                                    }`
                                }
                                onClick={closeSidebar}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <div className="pt-3">
                            <ImageUpload
                                src="button_happy_potato.gif"
                                alt="happy potato gif"
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
