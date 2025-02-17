"use client";

export default function AboutMe() {
  return (
    <section className="mx-auto text-center my-20">
      <h1 className="text-5xl font-greatVibes font-extrabold">About Me</h1>
      <p className="text-lg font-philosopher">
        Hi, I&apos;m Mohamed Kamara, a skilled software engineer with a first-class
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

