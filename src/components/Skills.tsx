"use client";
import { AnimatedProgress } from "./AnimatedProgress";
const programmingData = [
  { name: "JavaScript", skill: 80 },
  { name: "TypeScript", skill: 80 },
  { name: "Python", skill: 75 },
  { name: "Golang", skill: 80 },
  { name: "C", skill: 30 },
  { name: "C++", skill: 30 },
  { name: "PHP", skill: 30 },
];

const devOpsData = [
  { name: "Docker", skill: 65 },
  { name: "Bash Scripting", skill: 60 },
  { name: "Linux (Debian)", skill: 70 },
  { name: "Kubernetes", skill: 20 },
  { name: "AWS (EC2, S3, ECS)", skill: 75 },
  { name: "Pentesting", skill: 50 },
  { name: "System Observability (Prometheus, Grafana, Logs)", skill: 65 },
];

const softwareData = [
  { name: "React", skill: 85 },
  { name: "Next.js", skill: 80 },
  { name: "React Native (Mobile App, Firebase,Expo and more)", skill: 70 },
  { name: "Fiber (Golang)", skill: 85 },
  { name: "Flask (Python)", skill: 70 },
  { name: "Node.js (Express and more)", skill: 70 },
  { name: "GitHub and Automation", skill: 80 },
  {
    name: "Asynchronous and Event Driven Architecture with Kafka and MTTQ",
    skill: 80,
  },
  { name: "Databases (Postgres,MySQL,MongoDB,Firebase Firestore)", skill: 75 },
];

const othersData = [
  { name: "Windows Server Administration", skill: 60 },
  { name: "Microsoft Packages (Word,Excel,Power Point)", skill: 65 },
  { name: "Data Analysis with pyhton", skill: 50 },
  {
    name: "Manchine Learning Libraries in python (Sklearn,Keras,Tensorflow)",
    skill: 50,
  },
  { name: "Prompt Engineering with LLMs and RAG", skill: 70 },
];

export default function Skills() {
  const renderSkills = (data: { name: string; skill: number }[]) =>
    data.map((item) => (
      <div key={item.name} className="mb-4">
        <div className="flex justify-between">
          <span className="font-medium font-philosopher">{item.name}</span>
          <span className="text-gray-600 font-philosopher dark:text-gray-300">
            {item.skill}%
          </span>
        </div>
        <AnimatedProgress value={item.skill} />
      </div>
    ));

  return (
    <section className="mx-auto text-center my-20 max-w-4xl">
      <h1 className="text-5xl font-greatVibes font-extrabold mb-10">Skills</h1>
      <div className="mb-10">
        <h2 className="text-3xl font-philosopher font-semibold mb-5">
          Programming Languages
        </h2>
        {renderSkills(programmingData)}
      </div>
      <div className="mb-10">
        <h2 className="text-3xl font-philosopher font-semibold mb-5">
          DevOps & Cybersecurity
        </h2>
        {renderSkills(devOpsData)}
      </div>
      <div>
        <h2 className="text-3xl font-philosopher font-semibold mb-5">
          Software Development & Automation
        </h2>
        {renderSkills(softwareData)}
      </div>

      <div>
        <h2 className="text-3xl font-semibold my-5">Other skills</h2>
        {renderSkills(othersData)}
      </div>
    </section>
  );
}
