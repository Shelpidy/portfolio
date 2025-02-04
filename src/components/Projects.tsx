"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Project = ({ title, description, link, image }: ProjectProps) => {
  return (
    <div className="border rounded-lg hover:shadow-lg transition-shadow duration-300 dark:shadow-black">
      <div className="relative w-full aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          objectFit="fill"
          className="rounded-lg  font-philosopher"
        />
      </div>

      <div className="p-3 md:p-6">
        <h3 className="text-2xl font-semibold m2-4">{title}</h3>
        <p className="text-gray-700 font-philosopher dark:text-gray-300 mb-4">
          {description}
        </p>
        <Link href={link} target="_blank" className="font-bold hover:underline">
          View Project →
        </Link>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const projects = [
    {
      title: "Epsierra official website",
      description:
        "A showcase of my skills, projects, and contact information built with Next.js and Tailwind CSS.",
      link: "https://epsierra.com",
      image: "/epsierra-dark.png",
    },
    {
      title: "Epsierra for developers",
      description:
        "A fully functional e-commerce website with cart, checkout, and admin dashboard capabilities.",
      link: "https://developer.epsierra.com",
      image: "/developer-epsierra.png",
    },
  ];

  return (
    <section className="mx-auto text-center my-20 max-w-7xl px-4 md:px-8">
      <h1 className="text-5xl font-greatVibes font-extrabold mb-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
      <div className="p-4 bg-neutral-50 my-10 rounded-lg dark:bg-neutral-900">
        <h3 className="text-3xl m-3 text-center font-bold font-philosopher">
          Other projects include
        </h3>
        <ol className="text-left gap-2 font-philosopher">
          <li className="flex flex-row gap-2 justify-start items-center m-2">
            <Check /> Multivendor Ecommerce Web and mobile application.
          </li>
          <li className="flex flex-row gap-2 justify-start items-center m-2">
            <Check /> Doctor-Patient Appointment.
          </li>
          <li className="flex flex-row gap-2 justify-start items-center m-2">
            <Check /> Custom AI Chatbox.
          </li>
          <li className="flex flex-row gap-2 justify-start items-center m-2">
            <Check /> Student Management System.
          </li>
          <li className="flex flex-row gap-2 justify-start items-center m-2">
            <Check /> Dissertation Management System.
          </li>
          <li className="flex flex-row gap-2 justify-start items-center m-2">
            <Check /> Mini Wireshark with golang for network traffic analysis.
          </li>
          <li className="flex flex-row gap-2 justify-start items-center m-2">
            <Check /> Electrical Tools and Equipments Laboratory Management
            System.
          </li>
        </ol>
      </div>
    </section>
  );
}
