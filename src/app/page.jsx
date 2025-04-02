"use client";

import { Layout } from "antd";

import Navbar from "@/components/Navbar";
import Main from "@/components/pages/Main";

export default function Home() {
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Main />
    </Layout>
  );
}
