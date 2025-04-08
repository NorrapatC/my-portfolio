"use client";

import { Layout, FloatButton } from "antd";

import Navbar from "@/components/Navbar";
import Main from "@/components/pages/Main";
import About from "@/components/pages/About";
import TechSkills from "@/components/pages/TechSkills";

export default function Home() {
  return (
    <Layout className="min-h-screen flex flex-col">
      <Navbar />
      <Main />
      <About />
      <TechSkills />

      {/* Float Button for Back to Top */}
      <FloatButton.BackTop
        visibilityHeight={300}
        duration={300}
        tooltip="Back to Top"
      />
    </Layout>
  );
}
