import React from "react";
import { Layout } from "antd";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";

import Theme from "../Theme";

const { Content } = Layout;

function Main() {
  return (
    <Layout
      id="home"
      style={{ background: Theme.colors.background }}
      className="h-screen flex items-center justify-center py-20 md:h-screen lg:h-screen md:py-32 md:px-24 lg:py-24 lg:px-24 "
    >
      <Content className="container mx-auto px-6 py-6 sm:pt-20 lg:py-10 lg:px-10">
        <div className="px-6 py-8 md:px-10 md:py-10 lg:px-20 lg:py-14 ">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center text-center md:text-left">
            {/* Right Side: Profile Image */}
            <div className="flex justify-center sm:order-1 md:order-1 lg:order-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3, y: -10 }}
                whileTap={{ scale: 0.9, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="relative rounded-sm w-60 h-80 md:w-72 md:h-72 lg:w-90 lg:h-90 overflow-hidden border-1 border-earthGreen shadow-md"
                style={{
                  boxShadow: `0 6px 12px ${Theme.colors.shadow}`,
                  background: Theme.colors.background,
                }}
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

            {/* Left Side: Text Content */}
            <div className="text-start mt-4 sm:order-2 md:order-2 lg:order-1 ">
              <p
                className="mt-3 text-2xl font-semibold md:text-xl lg:text-2xl"
                style={{ color: Theme.colors.textSecondary }}
              >
                Hello, I'm
              </p>
              <h2
                className="text-4xl md:text-4xl lg:text-5xl font-bold"
                style={{ color: Theme.colors.textPrimary }}
              >
                Safe Norrapat
              </h2>
              <h3
                className="mt-4 text-2xl md:text-2xl lg:text-3xl font-semibold"
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
                className="mt-3 text-xl md:text-xl lg:text-2xl"
                style={{ color: Theme.colors.textSecondary }}
              >
                Welcome to My Portfolio
              </p>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Main;
