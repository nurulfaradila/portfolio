"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-dark-950"
    >

      <div className="absolute inset-0 grid-pattern opacity-50"></div>


      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-64 w-64 animate-float rounded-full bg-primary-300/10 blur-3xl dark:bg-primary-500/5"></div>
        <div
          className="absolute right-1/4 top-1/3 h-96 w-96 animate-float rounded-full bg-accent-cyan/10 blur-3xl dark:bg-accent-cyan/5"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 h-80 w-80 animate-float rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-600/5"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex justify-center">

          <div
            className={`w-full max-w-3xl rounded-lg border border-dark-200 bg-white/80 shadow-2xl backdrop-blur-sm transition-all duration-700 dark:border-dark-700 dark:bg-dark-900/80 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >

            <div className="flex items-center gap-2 border-b border-dark-200 bg-dark-100 px-4 py-3 dark:border-dark-700 dark:bg-dark-800">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-2 font-mono text-xs text-dark-600 dark:text-dark-400">
                portfolio.tsx
              </span>
            </div>


            <div className="p-6 font-mono text-sm sm:p-8 sm:text-base">

              <div className="flex gap-4">
                <span className="select-none text-dark-400 dark:text-dark-600">1</span>
                <div className="flex-1">
                  <span className="syntax-keyword">const</span>{" "}
                  <span className="syntax-variable">developer</span>{" "}
                  <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                  <span className="text-dark-600 dark:text-dark-400">{"{"}</span>
                </div>
              </div>


              <div className="flex gap-4">
                <span className="select-none text-dark-400 dark:text-dark-600">2</span>
                <div className="flex-1 pl-4">
                  <span className="text-dark-600 dark:text-dark-400">name:</span>{" "}
                  <span className="syntax-string">"Nurul Faradila Sazali"</span>
                  <span className="text-dark-600 dark:text-dark-400">,</span>
                </div>
              </div>


              <div className="flex gap-4">
                <span className="select-none text-dark-400 dark:text-dark-600">3</span>
                <div className="flex-1 pl-4">
                  <span className="text-dark-600 dark:text-dark-400">role:</span>{" "}
                  <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text font-semibold text-transparent">
                    "Software Engineer in Test"
                  </span>
                  <span className="text-dark-600 dark:text-dark-400">,</span>
                </div>
              </div>


              <div className="flex gap-4">
                <span className="select-none text-dark-400 dark:text-dark-600">4</span>
                <div className="flex-1 pl-4">
                  <span className="text-dark-600 dark:text-dark-400">skills:</span>{" "}
                  <span className="text-dark-600 dark:text-dark-400">[</span>
                  <span className="syntax-string">"Python"</span>
                  <span className="text-dark-600 dark:text-dark-400">,</span>{" "}
                  <span className="syntax-string">"API integration"</span>
                  <span className="text-dark-600 dark:text-dark-400">,</span>{" "}
                  <span className="syntax-string">"Data Management"</span>
                  <span className="text-dark-600 dark:text-dark-400">],</span>
                </div>
              </div>


              <div className="flex gap-4">
                <span className="select-none text-dark-400 dark:text-dark-600">5</span>
                <div className="flex-1 pl-4">
                  <span className="text-dark-600 dark:text-dark-400">passion:</span>{" "}
                  <span className="syntax-string">"Turning ideas into robust software"</span>
                  <span className="text-dark-600 dark:text-dark-400">,</span>
                </div>
              </div>


              <div className="flex gap-4">
                <span className="select-none text-dark-400 dark:text-dark-600">6</span>
                <div className="flex-1 pl-4">
                  <span className="syntax-function">build</span>
                  <span className="text-dark-600 dark:text-dark-400">:</span>{" "}
                  <span className="text-dark-600 dark:text-dark-400">() =&gt;</span>{" "}
                  <span className="text-dark-600 dark:text-dark-400">{"{"}</span>
                </div>
              </div>


              <div className="flex gap-4">
                <span className="select-none text-dark-400 dark:text-dark-600">7</span>
                <div className="flex-1 pl-8">
                  <span className="syntax-keyword">return</span>{" "}
                  <span className="syntax-string">
                    "Reliable and maintainable software"
                  </span>
                  <span className="text-dark-600 dark:text-dark-400">;</span>
                </div>
              </div>


              <div className="flex gap-4">
                <span className="select-none text-dark-400 dark:text-dark-600">8</span>
                <div className="flex-1 pl-4">
                  <span className="text-dark-600 dark:text-dark-400">{"}"}</span>
                </div>
              </div>


              <div className="flex gap-4">
                <span className="select-none text-dark-400 dark:text-dark-600">9</span>
                <div className="flex-1">
                  <span className="text-dark-600 dark:text-dark-400">{"}"}</span>
                  <span className="cursor-blink ml-1 inline-block h-5 w-0.5 bg-primary-500 align-middle"></span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 transition-all duration-700 sm:flex-row ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          style={{ transitionDelay: "400ms" }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 font-mono text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-primary-500/50"
          >
            <span className="relative z-10">view_projects()</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 transition-opacity group-hover:opacity-100"></div>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-lg border-2 border-primary-500 px-8 py-4 font-mono text-lg font-semibold text-primary-600 transition-all hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-white"
          >
            get_in_touch()
          </button>
        </div>
      </div>


      <div className="absolute bottom-8 inset-x-0 flex justify-center animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 font-mono text-sm text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-400"
          aria-label="Scroll to about section"
        >
          <span>scroll_down()</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
