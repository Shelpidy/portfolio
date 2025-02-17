"use client";

import Link from "next/link";
import { ArrowRight} from "lucide-react";

export default function ResumeSection() {
  return (
    <section className="mx-auto text-center my-20">
      <h1 className="text-5xl font-greatVibes font-extrabold">Resume</h1>
      <p className="text-lg font-philosopher">
        To learn more about me, including my experience, education, and more,
        download my resume.
      </p>
      <div className="flex justify-center items-center mt-6 gap-2">
        <Link
          href="/resume.pdf" // Replace with your actual resume link
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 border rounded-full border-black dark:border-gray-200 inline-flex items-center text-lg font-light font-greatVibes text-primary transition-colors"
        >
          View Resume
          <ArrowRight className="ml-2 h-5 w-5 transition-opacity duration-300 group-hover:translate-x-2" />
        </Link>

      </div>
    </section>
  );
}
