"use client";

import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

// Animation variants for parent container
const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 1, // Stagger children animations by 0.2 seconds
    },
  },
};

// Animation variants for individual items
const childVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutMe() {
  return (
    <section className="mx-auto text-center my-20">
      <h1 className="text-5xl font-greatVibes font-extrabold">About Me</h1>
      <p className="text-lg font-philosopher">
        Hi, I'm Mohamed Kamara, a skilled software engineer with a first-class
        honors degree in Electrical and Electronics Engineering from Fourah Bay
        College, USL. I specialize in developing web and mobile applications,
        leveraging modern frameworks like React, Next.js, and React Native. My
        expertise extends to backend development with Golang, Python, and
        Node.js, as well as machine learning, data visualization, and cloud
        platforms such as AWS. With a strong foundation in software
        architecture, cybersecurity, and system observability, I am passionate
        about creating impactful solutions and continuously advancing my skills.
        I also enjoy tutoring and sharing knowledge to help others grow in the
        field of technology.
      </p>
    </section>
  );
}

export const OutlineDividerSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    className="w-full h-auto"
    preserveAspectRatio="none"
  >
    <path
      d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,69.3C1200,64,1320,64,1380,64L1440,64"
      fill="none"
      stroke="#d3d3d3" // Light gray for outline
      strokeWidth="2"
    />
    <circle
      cx="720"
      cy="60"
      r="8"
      fill="none"
      stroke="#d3d3d3"
      strokeWidth="2"
    />
    {/* <circle
        cx="420"
        cy="80"
        r="8"
        fill="none"
        stroke="#d3d3d3"
        strokeWidth="2"
      /> */}
    <circle
      cx="1080"
      cy="30"
      r="6"
      fill="none"
      stroke="#d3d3d3"
      strokeWidth="2"
    />
    <circle
      cx="360"
      cy="90"
      r="10"
      fill="none"
      stroke="#d3d3d3"
      strokeWidth="2"
    />
  </svg>
);

OutlineDividerSVG;

const DividerSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="w-full h-auto"
    preserveAspectRatio="none"
  >
    <path
      fill="#d3d3d3" // Light gray color to fit both themes
      d="M0,96L80,106.7C160,117,320,139,480,170.7C640,203,800,245,960,234.7C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    />
  </svg>
);
