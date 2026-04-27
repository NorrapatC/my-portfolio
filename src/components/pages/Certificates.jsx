"use client";

import React, { useState } from "react";
import { Layout, Modal } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";

import Theme from "../Theme";

const { Content } = Layout;

const certificates = [
  {
    filename: "certificate.png",
    title: "Development Certificate",
  },
  {
    filename: "certificate_all_ai.jpg",
    title: "AI & Technology Certificate",
  },
  {
    filename: "certificate_canva_ai.jpg",
    title: "Canva AI Certificate",
  },
  {
    filename: "codingofall.png",
    title: "Coding of All",
  },
  {
    filename: "digitalandcyber.png",
    title: "Digital & Cyber Security",
  },
  {
    filename: "linedevcamp.png",
    title: "LINE Developer Camp",
  },
  {
    filename: "ML.png",
    title: "Machine Learning",
  },
];

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <Layout
      id="certificates"
      style={{ background: Theme.colors.background }}
      className="min-h-screen flex items-center justify-center py-20 md:py-32 md:px-24 lg:py-24 lg:px-24"
    >
      <Content className="container mx-auto px-4 lg:px-20 border-2 border-transparent rounded-lg shadow-xl bg-neutral-50 py-6">
        {/* Header */}
        <h3
          className="text-4xl sm:text-3xl font-bold text-start mt-4 mb-6 border-b-2 border-earthGreen"
          style={{ color: Theme.colors.textPrimary }}
        >
          Certificates
        </h3>

        {/* Certificates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {certificates.map((cert) => (
            <motion.div
              key={cert.filename}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="cursor-pointer rounded-lg overflow-hidden border border-transparent"
              style={{
                boxShadow: `0 4px 10px ${Theme.colors.shadow}`,
                background: Theme.colors.background,
                borderColor: Theme.colors.highlight,
              }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Image */}
              <div className="relative w-full" style={{ paddingBottom: "66%" }}>
                <Image
                  src={`/images/certificates/${cert.filename}`}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Title */}
              <div className="px-3 py-2">
                <p
                  className="text-xs md:text-sm font-semibold text-center truncate"
                  style={{ color: Theme.colors.textPrimary }}
                >
                  {cert.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for full-size certificate */}
        <Modal
          open={!!selectedCert}
          onCancel={() => setSelectedCert(null)}
          footer={null}
          centered
          width="80vw"
          styles={{
            content: { background: Theme.colors.background, padding: "16px" },
          }}
          title={
            <span style={{ color: Theme.colors.textPrimary, fontWeight: 700 }}>
              {selectedCert?.title}
            </span>
          }
        >
          {selectedCert && (
            <div className="relative w-full" style={{ paddingBottom: "66%" }}>
              <Image
                src={`/images/certificates/${selectedCert.filename}`}
                alt={selectedCert.title}
                fill
                sizes="80vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
        </Modal>
      </Content>
    </Layout>
  );
}

export default Certificates;
