"use client";

import React from "react";
import { Layout } from "antd";
import { MailOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import Theme from "../Theme";

const { Content } = Layout;

const contactItems = [
  {
    key: "email",
    icon: <MailOutlined style={{ fontSize: "1.75rem" }} />,
    label: "Email",
    value: "chanapolnorrapat@gmail.com",
    href: "mailto:chanapolnorrapat@gmail.com",
  },
  {
    key: "github",
    icon: <GithubOutlined style={{ fontSize: "1.75rem" }} />,
    label: "GitHub",
    value: "github.com/safe-norrapat",
    href: "https://github.com/safe-norrapat",
  },
  {
    key: "linkedin",
    icon: <LinkedinOutlined style={{ fontSize: "1.75rem" }} />,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/safe-norrapat",
  },
];

function Contact() {
  return (
    <Layout
      id="contact"
      style={{ background: Theme.colors.background }}
      className="min-h-screen flex items-center justify-center py-20 md:py-32 md:px-24 lg:py-24 lg:px-24"
    >
      <Content className="container mx-auto px-4 lg:px-20 border-2 border-transparent rounded-lg shadow-xl bg-neutral-50 py-6">
        {/* Header */}
        <h3
          className="text-4xl sm:text-3xl font-bold text-start mt-4 mb-6 border-b-2 border-earthGreen"
          style={{ color: Theme.colors.textPrimary }}
        >
          Contact
        </h3>

        {/* Subtitle */}
        <p
          className="text-center text-lg md:text-xl mb-10"
          style={{ color: Theme.colors.textSecondary }}
        >
          Feel free to reach out — I'd love to connect!
        </p>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-4">
          {contactItems.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              target={item.key !== "email" ? "_blank" : undefined}
              rel={item.key !== "email" ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.05, boxShadow: `0 12px 24px ${Theme.colors.shadow}` }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="flex flex-col items-center gap-3 px-8 py-7 rounded-xl w-full md:w-56 text-center no-underline"
              style={{
                background: Theme.colors.background,
                boxShadow: `0 4px 12px ${Theme.colors.shadow}`,
                border: `1px solid ${Theme.colors.highlight}`,
                color: Theme.colors.textPrimary,
                textDecoration: "none",
              }}
            >
              {/* Icon */}
              <span style={{ color: Theme.colors.earthGreen }}>{item.icon}</span>

              {/* Label */}
              <span
                className="font-bold text-base"
                style={{ color: Theme.colors.textPrimary }}
              >
                {item.label}
              </span>

              {/* Value */}
              <span
                className="text-sm break-all"
                style={{ color: Theme.colors.textSecondary }}
              >
                {item.value}
              </span>
            </motion.a>
          ))}
        </div>
      </Content>
    </Layout>
  );
}

export default Contact;
