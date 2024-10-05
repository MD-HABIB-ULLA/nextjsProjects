"use client";

import { useState } from "react";
import Image from "next/image";

const FeatureCard = ({ icon, title, description }) => (
  <div className="border border-gray-500/15 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const AboutSection = ({ title, description, imageSrc, isActive, onClick }) => (
  <div
    className={` rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 ${
      isActive ? "ring-4 ring-blue-500" : ""
    }`}
    onClick={onClick}
  >
    <Image
      src={imageSrc}
      alt={title}
      width={400}
      height={300}
      objectFit="cover"
    />
    <div className="p-6 ">
      <h2 className="text-2xl font-semibold mb-3 text-blue-400">{title}</h2>

      <p className="text-gray-600 transition-all ease-out duration-300 transform translate-y-0 opacity-100">
        {description}
      </p>
    </div>
  </div>
);

const page = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const sections = [
    {
      id: "mission",
      title: "Our Mission",
      description:
        "At TechSolutions, we're committed to delivering cutting-edge IT solutions that empower businesses to thrive in the digital age. Our mission is to simplify complex technologies and provide tailored services that drive growth and innovation.",
      imageSrc:
        "https://i.ibb.co.com/GMkvTrS/Blue-and-White-Modern-Professional-Corporate-Education-Presentation-7-86211e28be.jpg",
    },
    {
      id: "team",
      title: "Our Team",
      description:
        "Our diverse team of IT experts brings together a wealth of knowledge and experience. From software developers to network specialists, we collaborate to deliver comprehensive solutions tailored to your unique business needs.",
      imageSrc:
        "https://i.ibb.co.com/GMkvTrS/Blue-and-White-Modern-Professional-Corporate-Education-Presentation-7-86211e28be.jpg",
    },
    {
      id: "services",
      title: "Our Services",
      description:
        "We offer a wide range of IT services, including custom software development, cloud solutions, cybersecurity, and IT consulting. Our goal is to help you leverage technology to streamline operations, enhance productivity, and stay ahead of the competition.",
      imageSrc:
        "https://i.ibb.co.com/GMkvTrS/Blue-and-White-Modern-Professional-Corporate-Education-Presentation-7-86211e28be.jpg",
    },
  ];
  return (
    <div className=" text-white font-sans min-h-screen">
    

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          About
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section) => (
            <AboutSection
              key={section.id}
              title={section.title}
              description={section.description}
              imageSrc={section.imageSrc}
              isActive={activeTab === section.id}
              onClick={() => setActiveTab(section.id)}
            />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-yellow-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              title="Rapid Solutions"
              description="Quick turnaround times without compromising on quality."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-red-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
              title="Robust Security"
              description="State-of-the-art security measures to protect your data."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              }
              title="Custom Solutions"
              description="Tailored IT solutions to fit your specific business needs."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
              title="24/7 Support"
              description="Round-the-clock assistance for all your IT needs."
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
