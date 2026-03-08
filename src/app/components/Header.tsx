import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../../assets/logo.jpeg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/vision-mission", label: "Vision & Mission" },
    { path: "/services", label: "Services" },
    { path: "/achievements", label: "Achievements" },
    { path: "/events", label: "Events" },
    { path: "/blog", label: "Blog" },
    { path: "/donate", label: "Donate" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-black shadow-md sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Flexon Sports Foundation" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white leading-none">FLEXON</span>
              <span className="text-[12px] text-primary leading-none mt-1">SPORTS FOUNDATION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 transition-colors ${isActive(link.path)
                  ? "bg-primary text-white font-semibold"
                  : "text-gray-300 hover:bg-gray-800"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-800 bg-black">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 transition-colors ${isActive(link.path)
                  ? "bg-primary text-white font-semibold"
                  : "text-gray-300 hover:bg-gray-800"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}