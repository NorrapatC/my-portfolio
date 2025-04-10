import React from "react";
import { Layout } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";

import Theme from "../Theme";
const { Content } = Layout;

function TechSkills() {
  return (
    <Layout
      style={{ background: Theme.colors.background }}
      className="h-screen flex items-center justify-center py-10 md:py-32 md:px-24 lg:py-24 lg:px-24"
    >
      <Content className="container mx-auto px-1 py-4 lg:px-20 border-2 border-transparent rounded-lg shadow-xl">
        <h3
          className="text-4xl sm:text-3xl font-bold text-start mt-4 mb-4 border-b-2 border-earthGreen"
          style={{ color: Theme.colors.textPrimary }}
        >
          Skills
        </h3>

        <div className="grid grid-cols-2 p-4 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center text-center md:text-left">
          {/* HTML5 Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/html5.png"
                alt="html5"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              HTML5
            </p>
          </motion.div>
          {/* CSS3 Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/css-3.png"
                alt="css3"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              CSS3
            </p>
          </motion.div>
          {/* JavaScript Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/js.png"
                alt="javascript"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              JavaScript
            </p>
          </motion.div>
          {/* ReactJs Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/react.png"
                alt="react"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              React
            </p>
          </motion.div>

          {/* TailwindCss Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/tailwindcss.png"
                alt="tailwindcss"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              Tailwind CSS
            </p>
          </motion.div>
          {/* Bootstrap Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/bootstrap.png"
                alt="bootstrap"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              Bootstrap
            </p>
          </motion.div>
          {/* NodeJs Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/node-js.png"
                alt="nodejs"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              Node JS
            </p>
          </motion.div>
          {/* NextJs Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/nextjs.png"
                alt="nextjs"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              Next JS
            </p>
          </motion.div>
          {/* Github Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/github.png"
                alt="github"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              GitHub
            </p>
          </motion.div>
          {/* Sql Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/sql-server.png"
                alt="sql"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              SQL
            </p>
          </motion.div>
          {/* Python Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/python.png"
                alt="python"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              Python
            </p>
          </motion.div>
          {/* Vercel Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/vercel.png"
                alt="vercel"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              Vercel
            </p>
          </motion.div>
          {/* MongoDB Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18">
              <Image
                src="/images/mongodb.png"
                alt="mongodb"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              MongoDB
            </p>
          </motion.div>
          {/* Blender Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="relative w-9 h-9 md:w-12 md:h-12 lg:w-18 lg:h-18 ">
              <Image
                src="/images/blender.png"
                alt="blender"
                fill
                sizes="(max-width: 768px) 2.25rem, (max-width: 1024px) 3rem, 4.5rem"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="text-center text-xs md:text-lg font-semibold text-gray-700">
              Blender
            </p>
          </motion.div>
        </div>
      </Content>
    </Layout>
  );
}

export default TechSkills;
