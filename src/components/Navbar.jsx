import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Theme from "./Theme";
import { Layout } from "antd";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout.Header
      className="p-4 shadow-lg fixed w-full top-0 left-0 z-10"
      style={{
        background: Theme.colors.background,
        position: "relative",
        borderBottom: `2px solid ${Theme.colors.highlight}`,
        boxShadow: `0 4px 6px ${Theme.colors.shadow}`,
      }}
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
          {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="border-b-2 border-transparent transition-all duration-300 ease-in-out"
              style={{
                color: Theme.colors.textSecondary,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = Theme.colors.highlight;
                e.target.style.borderBottomColor = Theme.colors.highlight;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = Theme.colors.textSecondary;
                e.target.style.borderBottomColor = "transparent";
              }}
            >
              {item}
            </a>
          ))}
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
            boxShadow: `0 4px 6px ${Theme.colors.shadow}`,
          }}
        >
          {["Home", "About", "Skills", "Project", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 w-full transition-all duration-300 ease-in-out"
              style={{ color: Theme.colors.textSecondary }}
              onMouseEnter={(e) => {
                e.target.style.color = Theme.colors.highlight;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = Theme.colors.textSecondary;
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </Layout.Header>
  );
}
