"use client";

import React from "react";
import { Layout, Tag } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import Theme from "../Theme";

const { Content } = Layout;

const projects = [
  {
    name: "Leave Management System",
    github: "https://github.com/safe-norrapat/leave-management",
    description:
      "Employee leave request and approval system with role-based access control for HR workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "SQL Server"],
    status: "Completed",
  },
  {
    name: "Personal Dashboard",
    github: "https://github.com/safe-norrapat/dashboard",
    description:
      "Developer productivity dashboard with task tracking, freelance pipeline, and AI-powered briefings.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Notion API"],
    status: "Completed",
  },
  {
    name: "Portfolio Website",
    github: "https://github.com/safe-norrapat/my-portfolio",
    description:
      "Personal portfolio showcasing projects, skills, and certifications.",
    tech: ["Next.js", "Ant Design", "Framer Motion", "Tailwind CSS"],
    status: "Completed (this site)",
  },
];

function Project() {
  return (
    <Layout
      id="projects"
      style={{ background: Theme.colors.background }}
      className="min-h-screen flex items-center justify-center py-20 md:py-32 md:px-24 lg:py-24 lg:px-24"
    >
      <Content className="container mx-auto px-4 lg:px-20 border-2 border-transparent rounded-lg shadow-xl bg-neutral-50 py-6">
        {/* Header */}
        <h3
          className="text-4xl sm:text-3xl font-bold text-start mt-4 mb-6 border-b-2 border-earthGreen"
          style={{ color: Theme.colors.textPrimary }}
        >
          Projects
        </h3>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 12px 24px ${Theme.colors.shadow}`,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="rounded-xl p-6 flex flex-col gap-4"
              style={{
                background: Theme.colors.background,
                boxShadow: `0 4px 12px ${Theme.colors.shadow}`,
                border: `1px solid ${Theme.colors.highlight}`,
              }}
            >
              {/* Project Name */}
              <h4
                className="text-xl font-bold"
                style={{ color: Theme.colors.textPrimary }}
              >
                {project.name}
              </h4>

              {/* Description */}
              <p
                className="text-sm md:text-base flex-1"
                style={{ color: Theme.colors.textSecondary }}
              >
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Tag
                    key={tech}
                    style={{
                      background: Theme.colors.earthOrange,
                      color: "#fff",
                      border: "none",
                      borderRadius: "9999px",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                    }}
                  >
                    {tech}
                  </Tag>
                ))}
              </div>

              {/* Status and GitHub */}
              <div className="flex items-center gap-2 mt-auto flex-row">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ background: Theme.colors.earthGreen }}
                />
                <span
                  className="text-xs font-semibold"
                  style={{ color: Theme.colors.earthGreen }}
                >
                  {project.status}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-0.5 rounded text-xs font-semibold"
                  style={{
                    border: `1px solid ${Theme.colors.earthGreen}`,
                    color: Theme.colors.earthGreen,
                    textDecoration: "none",
                  }}
                >
                  <GithubOutlined />
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Content>
    </Layout>
  );
}

export default Project;
