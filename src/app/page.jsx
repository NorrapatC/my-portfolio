"use client";

import { Layout } from "antd";

import Navbar from "@/components/Navbar";
import Main from "@/components/pages/Main";
import About from "@/components/pages/About";

export default function Home() {
  return (
    <Layout className="min-h-screen flex flex-col">
      <Navbar />
      <Main />
      <About />
    </Layout>
  );
}
