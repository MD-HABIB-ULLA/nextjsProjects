"use client";

import { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border h-9   border-gray-600/15 text-black p-1 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md  border h-9   border-gray-600/15 text-black p-1 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md  border h-9   border-gray-600/15 text-black p-1 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

const ContactInfo = ({ icon, title, info }) => (
  <div className="flex items-start space-x-3">
    {icon}
    <div>
      <h3 className="text-lg font-medium text-gray-400">{title}</h3>
      <p className="text-gray-400">{info}</p>
    </div>
  </div>
);

export default function page() {
  return (
    <div>
      <div className=" text-white font-sans ">
        <main className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Contact
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            {/* Contact Form Section */}
            <div className="rounded-xl shadow-lg p-6 border border-gray-500/15">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information Section */}
            <div className="border border-black/15 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                  title="Phone"
                  info="+1 (555) 123-4567"
                />
                <ContactInfo
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                  title="Email"
                  info="info@techsolutions.com"
                />
                <ContactInfo
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                  title="Address"
                  info="123 Tech Street, Silicon Valley, CA 94000"
                />
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/ZNSCtDq/Google-Maps-1.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="mt-12 w-full rounded-xl shadow-lg p-6 flex flex-col h-[400px] overflow-hidden"
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">
              Our Location
            </h2>
          </div>
        </main>
      </div>
    </div>
  );
}
