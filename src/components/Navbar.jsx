"use client";

import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Theme from "./Theme";
import { Layout } from "antd";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout.Header
      className="p-4 shadow-lg fixed w-full top-0 left-0 z-10"
      style={{
        background: Theme.colors.background,
        borderBottom: `2px solid ${Theme.colors.highlight}`,
        boxShadow: `0 4px 6px ${Theme.colors.shadow}`,
      }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold"
          style={{ color: Theme.colors.textPrimary }}
        >
          Safe Norrapat
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="border-b-2 border-transparent hover:border-highlight transition-all duration-300"
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
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden z-20"
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
          className="md:hidden p-4 shadow-lg w-full absolute top-full left-0 right-0"
          style={{
            background: Theme.colors.navbar,
            boxShadow: `0 4px 6px ${Theme.colors.shadow}`,
            zIndex: 10,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block border-b-2 border-transparent hover:border-highlight transition-all duration-300"
              onClick={() => setIsOpen(false)}
              style={{ color: Theme.colors.textSecondary }}
              onMouseEnter={(e) => {
                e.target.style.color = Theme.colors.highlight;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = Theme.colors.textSecondary;
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </Layout.Header>
  );
}
