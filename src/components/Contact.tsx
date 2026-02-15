"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-primary-50/50 py-20 dark:bg-dark-950 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
            <span className="syntax-comment">// </span>Get In Touch
          </h2>
          <h3 className="mb-6 text-4xl font-bold text-dark-900 dark:text-white lg:text-5xl">
            Let's Work Together
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-dark-600 dark:text-dark-300">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          <div className="space-y-8">
            <div>
              <h4 className="mb-6 text-2xl font-bold text-dark-900 dark:text-white">
                Contact Information
              </h4>

              <div className="space-y-4">
                <a
                  href="mailto:nurulfaradila19@gmail.com"
                  className="group flex items-start gap-4 rounded-lg p-4 transition-all hover:bg-white dark:hover:bg-dark-900"
                >
                  <div className="rounded-lg bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white dark:bg-dark-800 dark:text-primary-400">
                    <svg
                      className="h-6 w-6"
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
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900 dark:text-white">Email</div>
                    <div className="text-dark-600 dark:text-dark-400">
                      nurulfaradila19@gmail.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-lg p-4">
                  <div className="rounded-lg bg-primary-100 p-3 text-primary-600 dark:bg-dark-800 dark:text-primary-400">
                    <svg
                      className="h-6 w-6"
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
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900 dark:text-white">Location</div>
                    <div className="text-dark-600 dark:text-dark-400">
                      Pulau Pinang, Malaysia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg p-4">
                  <div className="rounded-lg bg-primary-100 p-3 text-primary-600 dark:bg-dark-800 dark:text-primary-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900 dark:text-white">
                      Availability
                    </div>
                    <div className="text-dark-600 dark:text-dark-400">
                      Open to new opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div>
              <h4 className="mb-4 text-xl font-bold text-dark-900 dark:text-white">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/nurulfaradila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white p-3 text-dark-800 shadow-md transition-all hover:bg-primary-500 hover:text-white hover:shadow-lg dark:bg-dark-900 dark:text-dark-200"
                  aria-label="GitHub"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nurul-faradila-sazali-532a6122a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white p-3 text-dark-800 shadow-md transition-all hover:bg-primary-500 hover:text-white hover:shadow-lg dark:bg-dark-900 dark:text-dark-200"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>


          <div className="rounded-xl border border-dark-200 bg-white p-8 shadow-lg dark:border-dark-800 dark:bg-dark-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-dark-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-dark-300 bg-white px-4 py-3 text-dark-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-dark-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-dark-300 bg-white px-4 py-3 text-dark-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-dark-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-dark-300 bg-white px-4 py-3 text-dark-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-dark-700 dark:bg-dark-800 dark:text-white"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary-500 px-6 py-3 font-mono font-semibold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/50"
              >
                send_message()
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
