"use client";

import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import Link from "next/link";

const OurTeamSection = () => {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      perView: 4,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        780: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const data = [
    {
      name: "Rahat Ahmed Rahe",
      title: "Marketing manager",
      image:
        "https://i.ibb.co/DYrL74G/B612-20240904-221052-172-Rahat-Ahmed-Rahe.jpg",
      facebook: "https://www.facebook.com/username",
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://x.com/username",
    },
    {
      name: "Habib Ulla",
      title: "Frontend developer",
      image: "https://i.ibb.co/jMh3Ypj/enhanced-151.jpg",
      facebook: "https://www.facebook.com/username",
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://x.com/username",
    },
    {
      name: "Fazlul Alam",
      title: "Chief Technology Officer",
      image: "https://i.ibb.co/G7cqP6z/132310-Fazlul-Alam.jpg",
      facebook: "https://www.facebook.com/username",
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://x.com/username",
    },
    {
      name: "Md Mahbub E Waduzzaman",
      title: "Chief Executive Officer",
      image: "https://i.ibb.co/Zgpq5n4/mahbub-Md-Mahbub-E-Waduzzaman.jpg",
      facebook: "https://www.facebook.com/username",
      linkedin: "https://www.linkedin.com/in/",
      twitter: "https://x.com/username",
    },
    {
      name: "Kamaruzzaman Fahad",
      title: "Full-Stack Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHDK704bfxk5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714626474103?e=1732147200&v=beta&t=93vKmji9JT-M8iWgy0Kc37M9AeObYEIRBAqYDn7ba7w",
      facebook: "https://www.facebook.com/profile.php?id=100016244400163",
      linkedin: "https://www.linkedin.com/in/kamaruzzamanfahad",
      twitter: "https://x.com/kamaruzzamanfahad",
    },
  ];
  const [shuffledData, setshuffledData] = useState(data);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  useEffect(() => {
    const shuffledData = shuffleArray([...data]);
    setshuffledData(shuffledData);
  }, []); // Spread operator to avoid mutating the original array

  const openNewTab = (url) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.error(
        "Window is not defined. This code should run in the browser."
      );
    }
  };
  return (
    <div className=" bg-top bg-cover bg-no-repeat px-5 ">
      <div className="w-full max-w-[1440px] mx-auto pb-10">
        <div className=" text-center">
          <p className="text-6xl py-10 font-bold">Meet our team</p>
        </div>

        <div>
          <div className="glide-04 relative w-full">
            {/*<!-- Slides --> */}
            <div
              className="overflow-hidden h-[410px] rounded-3xl"
              data-glide-el="track"
            >
              <ul className="relative flex w-full p-0 ">
                {data.map((card, index) => (
                  <div
                    key={index}
                    className={`relative flex w-full h-[380px]  flex-col   bg-clip-border text-gray-700  shadow-lg  group `}
                  >
                    <div className="h-full w-full rounded-3xl overflow-hidden duration-500">
                      <img
                        src={card.image}
                        className="object-cover h-full w-full  group-hover:scale-110 duration-500 rounded-3xl"
                        alt=""
                      />
                    </div>
                    <div className="h-full  absolute flex items-end top-6 w-full ">
                      <div className="w-5/6 bg-black/40 backdrop-blur-md h-20 group hover:h-32 duration-300 rounded-3xl mx-auto shadow-lg border border-white/30">
                        <div className="text-center p-2 flex justify-between flex-col h-full">
                          <div>
                            <h1
                              className={`${
                                card.name.length > 16
                                  ? "text-base"
                                  : card.name.length > 11
                                  ? "text-xl"
                                  : "text-2xl"
                              } text-wrap font-bold text-white`}
                            >
                              {card.name}
                              {/* {console.log(card.name.length)} */}
                            </h1>
                            <p className="text-base text-wrap  text-white">
                              {card.title}
                            </p>
                          </div>
                          <div className="hidden group-hover:block duration-300">
                            <div className="group  flex-wrap items-center gap-3 justify-center flex ">
                              <Link
                                className="cursor-pointer rounded-full border border-[#0e7490]/5 bg-[#0e7490]/5 p-3 text-white transition-colors hover:border-white/30 hover:bg-[#0e7490]/10 hover:!opacity-100 group-hover:opacity-70"
                                href={card.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaFacebookF />
                              </Link>

                              <Link
                                className="cursor-pointer rounded-full border border-[#0e7490]/5 bg-[#0e7490]/5 p-3 text-white transition-colors hover:border-white/30 hover:bg-[#0e7490]/10 hover:!opacity-100 group-hover:opacity-70"
                                href={card.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaLinkedin />
                              </Link>

                              <Link
                                href={card.twitter}
                                target="_blank"
                                className="cursor-pointer rounded-full border border-[#0e7490]/5 bg-[#0e7490]/5 p-3 text-white transition-colors hover:border-white/30 hover:bg-[#0e7490]/10 hover:!opacity-100 group-hover:opacity-70"
                                rel="noopener noreferrer"
                              >
                                <FaTwitter />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>

            {/*<!-- Controls --> */}
            <div
              className="flex w-full items-center justify-center gap-2 p-4"
              data-glide-el="controls"
            >
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300  text-slate-300 transition duration-300 hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir="<"
                aria-label="prev slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <title>Previous slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300  text-slate-300 transition duration-300 hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none lg:h-12 lg:w-12"
                data-glide-dir=">"
                aria-label="next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <title>Next slide</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
