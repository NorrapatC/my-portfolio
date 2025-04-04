import React from "react";
import { Layout } from "antd";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import Theme from "../Theme";

const { Content } = Layout;

function Main() {
  return (
    <Layout
      style={{ background: Theme.colors.background }}
      className="min-h-screen flex items-center justify-center"
    >
      <Content className="container mx-auto px-6 lg:px-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          {/* Left Side: Text Content */}
          <div className="text-center sm:mt-4">
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: Theme.colors.textPrimary }}
            >
              Safe Norrapat
            </h2>
            <h3
              className="mt-4 text-lg sm:text-xl"
              style={{ color: Theme.colors.highlight }}
            >
              <Typewriter
                words={[
                  "FullStack Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Web Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={100}
              />
            </h3>
            <p
              className="mt-3 text-sm sm:text-base"
              style={{ color: Theme.colors.textSecondary }}
            >
              Welcome to My Portfolio
            </p>
          </div>

          {/* Right Side: Profile Image */}
          <div className="flex justify-center">
            <motion.img
              src="/images/profile2.png"
              alt="Profile"
              className="rounded-xl w-56 sm:w-64 h-auto object-cover border-2"
              style={{
                borderColor: Theme.colors.highlight,
                boxShadow: `0 6px 12px ${Theme.colors.shadow}`,
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Main;
