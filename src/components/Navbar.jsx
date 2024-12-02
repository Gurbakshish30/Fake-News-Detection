import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavItemClick = (event, href) => {
    event.preventDefault(); // Prevent default anchor tag behavior

    const targetSection = document.querySelector(href); // Get the target section element

    if (targetSection) {
      // Smoothly scroll to the target section with an offset for the navbar height
      targetSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } else {
      console.error(`Section with ID "${href}" not found.`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-15 w-14 mr-1" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">W0RD OF MOUTH</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a onClick={(e) => handleNavItemClick(e, item.href)} href="#">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a onClick={(e) => handleNavItemClick(e, item.href)} href="#">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;