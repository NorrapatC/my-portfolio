import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Theme from "./Theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="p-4 shadow-lg"
      style={{ background: Theme.colors.background }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold"
          style={{ color: Theme.colors.textPrimary }}
        >
          Safe Norrapat
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="relative hover:text-[#A8DADC] border-b-2 border-transparent hover:border-[#A8DADC] transition-all duration-300 ease-in-out"
            style={{ color: Theme.colors.textSecondary }}
          >
            Home
          </a>
          <a
            href="#"
            className="relative hover:text-[#A8DADC] border-b-2 border-transparent hover:border-[#A8DADC] transition-all duration-300 ease-in-out"
            style={{ color: Theme.colors.textSecondary }}
          >
            About
          </a>
          <a
            href="#"
            className="relative hover:text-[#A8DADC] border-b-2 border-transparent hover:border-[#A8DADC] transition-all duration-300 ease-in-out"
            style={{ color: Theme.colors.textSecondary }}
          >
            Skills
          </a>
          <a
            href="#"
            className="relative hover:text-[#A8DADC] border-b-2 border-transparent hover:border-[#A8DADC] transition-all duration-300 ease-in-out"
            style={{ color: Theme.colors.textSecondary }}
          >
            Project
          </a>
          <a
            href="#"
            className="relative hover:text-[#A8DADC] border-b-2 border-transparent hover:border-[#A8DADC] transition-all duration-300 ease-in-out"
            style={{ color: Theme.colors.textSecondary }}
          >
            Contact
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden"
          style={{ color: Theme.colors.textSecondary }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <CloseOutlined className="text-xl" />
          ) : (
            <MenuOutlined className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden p-4 shadow-lg"
          style={{ background: Theme.colors.navbar }}
        >
          <a
            href="#"
            className="block py-2"
            style={{ color: Theme.colors.textSecondary }}
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2"
            style={{ color: Theme.colors.textSecondary }}
          >
            About
          </a>
          <a
            href="#"
            className="block py-2"
            style={{ color: Theme.colors.textSecondary }}
          >
            Skills
          </a>
          <a
            href="#"
            className="block py-2"
            style={{ color: Theme.colors.textSecondary }}
          >
            Project
          </a>
          <a
            href="#"
            className="block py-2"
            style={{ color: Theme.colors.textSecondary }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
