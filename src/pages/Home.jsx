import React, { useState } from "react";
import {
  FaNetworkWired,
  FaServer,
  FaCamera,
  FaTools,
  FaLaptopCode,
  FaCodeBranch,
  FaHeadset,
  FaDatabase,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const skills = [
    {
      title: "Networking",
      description: "Designing and managing secure network systems.",
      icon: <FaNetworkWired size={90} color="#4ade80" style={{ filter: "drop-shadow(0 0 4px #4ade80)" }} />,
    },
    {
      title: "MERN Stack",
      description: "Building full-stack apps with MongoDB, Express, React, and Node.js.",
      icon: <FaServer size={90} color="#3b82f6" style={{ filter: "drop-shadow(0 0 4px #3b82f6)" }} />,
    },
    {
      title: "CCTV Installation",
      description: "Professional installation of surveillance systems.",
      icon: <FaCamera size={90} color="#f59e0b" style={{ filter: "drop-shadow(0 0 4px #f59e0b)" }} />,
    },
    {
      title: "Server Management",
      description: "Managing on-premise and cloud-based servers.",
      icon: <FaTools size={90} color="#ef4444" style={{ filter: "drop-shadow(0 0 4px #ef4444)" }} />,
    },
    {
      title: "Frontend Design",
      description: "Crafting responsive and attractive UI with React and Bootstrap.",
      icon: <FaLaptopCode size={90} color="#a78bfa" style={{ filter: "drop-shadow(0 0 4px #a78bfa)" }} />,
    },
    {
      title: "API Integration",
      description: "Integrating REST APIs into modern web applications.",
      icon: <FaCodeBranch size={90} color="#34d399" style={{ filter: "drop-shadow(0 0 4px #34d399)" }} />,
    },
    {
      title: "Tech Support",
      description: "Offering dependable technical support and troubleshooting.",
      icon: <FaHeadset size={90} color="#0ea5e9" style={{ filter: "drop-shadow(0 0 4px #0ea5e9)" }} />,
    },
    {
      title: "Database Systems",
      description: "Designing and maintaining robust data storage solutions.",
      icon: <FaDatabase size={90} color="#f87171" style={{ filter: "drop-shadow(0 0 4px #f87171)" }} />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, icon } = skills[currentIndex];

  const animationProps = useSpring({
    key: currentIndex,
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(50px)" },
    reset: true,
  });

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % skills.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <div
      style={{
        background: theme === 'dark'
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%), url('https://www.transparenttextures.com/patterns/cubes.png')"
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%), url('https://www.transparenttextures.com/patterns/cubes.png')",
        backgroundBlendMode: "overlay",
        minHeight: "100vh",
        padding: "5rem 1rem",
        fontFamily: "'Montserrat', sans-serif",
      }}
      className={`${theme === 'dark' ? 'text-light' : 'text-dark'} d-flex flex-column align-items-center`}
    >
      {/* 👋 Intro Section */}
      <section className="text-center mb-5" style={{ maxWidth: "900px" }}>
        <h1
          className="display-1 fw-bold mb-3"
          style={{ color: "#4ade80", textShadow: "0 0 8px #4ade80" }}
        >
          Hi, I'm Reuben Ng'uni
        </h1>
        <p className={`lead fs-4 ${theme === 'dark' ? 'text-white' : 'text-dark'}`} style={{ maxWidth: "600px", margin: "auto" }}>
          A passionate tech professional specializing in networking, full-stack MERN development, and advanced security systems.
        </p>
      </section>

      {/* 🛠 What I Do Section */}
      <section className="text-center" style={{ width: "100%", maxWidth: "600px" }}>
        <h2 className="fs-1 mb-4" style={{ color: "#a5b4fc", textShadow: "0 0 6px #a5b4fc" }}>
          What I Do
        </h2>

        <animated.div
          style={{
            ...animationProps,
            borderRadius: "1.5rem",
            boxShadow: "0 0 30px rgba(0,0,0,0.7)",
            border: "1px solid #334155",
            backgroundColor: theme === 'dark' ? "#1e293b" : "#ffffff",
            padding: "3rem 2rem",
            cursor: "default",
            userSelect: "none",
          }}
          className="mb-4"
        >
          <div className="mb-4">{icon}</div>
          <h3 className={`fs-2 mb-3 ${theme === 'dark' ? 'text-white' : 'text-dark'}`} style={{ textShadow: "0 0 4px rgba(0,0,0,0.7)" }}>
            {title}
          </h3>
          <p className={`fs-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`} style={{ lineHeight: 1.5, maxWidth: "450px", margin: "auto" }}>
            {description}
          </p>
        </animated.div>

        <div className="d-flex justify-content-center gap-4">
          <Button
            variant={theme === 'dark' ? "outline-light" : "outline-dark"}
            size="lg"
            onClick={goToPrev}
            style={{ minWidth: "140px", fontWeight: "600" }}
          >
            <FaArrowLeft className="me-2" />
            Previous
          </Button>
          <Button
            variant={theme === 'dark' ? "outline-light" : "outline-dark"}
            size="lg"
            onClick={goToNext}
            style={{ minWidth: "140px", fontWeight: "600" }}
          >
            Next
            <FaArrowRight className="ms-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
