import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Theme from "./Theme";
import { Layout } from "antd";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout.Header
      className="p-4 shadow-lg fixed w-full top-0 left-0 z-10"
      style={{ background: Theme.colors.background, position: "relative" }}
    >
      <div className="flex justify-between items-center">
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
            className="border-b-2 border-transparent hover:border-[#A8DADC] hover:text-[#A8DADC] transition-all duration-300 ease-in-out"
            style={{ color: Theme.colors.textSecondary }}
          >
            Home
          </a>
          <a
            href="#"
            className="relative border-b-2 border-transparent hover:border-[#A8DADC] hover:text-[#A8DADC] transition-all duration-300 ease-in-out"
            style={{ color: Theme.colors.textSecondary }}
          >
            About
          </a>
          <a
            href="#"
            className="relative border-b-2 border-transparent hover:border-[#A8DADC] hover:text-[#A8DADC] transition-all duration-300 ease-in-out"
            style={{ color: Theme.colors.textSecondary }}
          >
            Skills
          </a>
          <a
            href="#"
            className="relative border-b-2 border-transparent hover:border-[#A8DADC] hover:text-[#A8DADC] transition-all duration-300 ease-in-out"
            style={{ color: Theme.colors.textSecondary }}
          >
            Project
          </a>
          <a
            href="#"
            className="relative border-b-2 border-transparent hover:border-[#A8DADC] hover:text-[#A8DADC] transition-all duration-300 ease-in-out"
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
          className="md:hidden p-4 shadow-lg w-full"
          style={{
            background: Theme.colors.navbar,
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
          }}
        >
          <a
            href="#"
            className="block py-2 w-full"
            style={{ color: Theme.colors.textSecondary }}
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 w-full"
            style={{ color: Theme.colors.textSecondary }}
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 w-full"
            style={{ color: Theme.colors.textSecondary }}
          >
            Skills
          </a>
          <a
            href="#"
            className="block py-2 w-full"
            style={{ color: Theme.colors.textSecondary }}
          >
            Project
          </a>
          <a
            href="#"
            className="block py-2 w-full"
            style={{ color: Theme.colors.textSecondary }}
          >
            Contact
          </a>
        </div>
      )}
    </Layout.Header>
  );
}
