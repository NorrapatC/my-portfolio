import React from "react";
import { Layout } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";

import Theme from "../Theme";

const { Content } = Layout;

function About() {
  return (
    <Layout
      id="about"
      style={{ background: Theme.colors.background }}
      className="h-screen flex items-center justify-center py-10 md:py-32 md:px-24 lg:py-24 lg:px-24"
    >
      <Content className="container mx-auto px-6 py-6 lg:px-20 border-2 border-transparent rounded-lg shadow-xl bg-neutral-50">
        {/* Header */}
        <h3
          className="text-4xl sm:text-3xl font-bold text-start mt-4 mb-6 border-b-2 border-earthGreen"
          style={{ color: Theme.colors.textPrimary }}
        >
          About Me
        </h3>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 p-10 md:grid-cols-2 gap-14 items-center text-center md:text-left">
          {/* Left Side: Profile Image */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="rounded-full w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden border-1 border-earthGreen shadow-md"
              style={{ background: Theme.colors.background }}
            >
              <Image
                src="/images/profile2.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                priority
              />
            </motion.div>
          </div>

          {/* Right Side: Text Content */}
          <div className="text-start mt-4 ">
            <p
              className="text-lg md:text-xl lg:text-2xl font-semibold mb-4"
              style={{ color: Theme.colors.textSecondary }}
            >
              As a recent graduate in
            </p>
            <p
              className="mt-4 text-lg md:text-xl lg:text-xl"
              style={{ color: Theme.colors.textSecondary }}
            >
              <span className="font-semibold">
                Bachelor of Science Program in Computer Science
              </span>{" "}
              from Kasetsart University (KU), I am passionate for development
            </p>
            <p
              className="mt-3 text-base md:text-xl lg:text-xl"
              style={{ color: Theme.colors.textSecondary }}
            >
              I'm a full-stack developer who loves working on both frontend and
              backend. I create web applications designed to meet user needs,
              focusing on providing a great and easy-to-use experience. I strive
              to make everything intuitive and tailored to what users want!
            </p>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default About;
