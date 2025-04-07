import React from "react";
import { Layout } from "antd";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import Theme from "../Theme";

const { Content } = Layout;

function Main() {
  return (
    <Layout
      id="home"
      style={{ background: Theme.colors.background }}
      className="h-screen flex items-center justify-center sm:min-h-screen sm:py-40 sm:px-16 lg:py-32 lg:px-24 md:py-36 md:px-24 gap-8"
    >
      <Content className="container mx-auto px-6 py-6 lg:py-10 lg:px-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 items-center text-center md:text-left">
          {/* Left Side: Text Content */}
          <div className="text-start sm:mt-4">
            <p
              className="mt-3 text-xl font-semibold sm:text-xl md:text-xl lg:text-2xl"
              style={{ color: Theme.colors.textSecondary }}
            >
              Hello, I'm
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: Theme.colors.textPrimary }}
            >
              Safe Norrapat
            </h2>
            <h3
              className="mt-4 text-lg sm:text-xl"
              style={{ color: Theme.colors.earthGreen }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
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
              </motion.div>
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
              className="rounded-sm w-52 sm:w-64 md:w-80 h-90 object-cover border-1"
              style={{
                boxShadow: `0 6px 12px ${Theme.colors.shadow}`,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 3,
                y: -10, // เพิ่มการเลื่อนในแนว Y
              }}
              whileTap={{
                scale: 0.9,
                rotate: 0,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Main;
