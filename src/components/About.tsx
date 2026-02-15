"use client";

import { skills } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-dark-900 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="space-y-6">
            <div>
              <h2 className="mb-2 font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                <span className="syntax-comment">// </span>About Me
              </h2>
              <h3 className="text-4xl font-bold text-dark-900 dark:text-white lg:text-5xl">
                Building Scalability & Reliability Solutions
              </h3>
            </div>


            <div className="rounded-lg border border-dark-200 bg-white/80 shadow-lg backdrop-blur-sm dark:border-dark-700 dark:bg-dark-900/80">

              <div className="flex items-center gap-2 border-b border-dark-200 bg-dark-100 px-4 py-2 dark:border-dark-700 dark:bg-dark-800">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-2 font-mono text-xs text-dark-600 dark:text-dark-400">
                  about.tsx
                </span>
              </div>


              <div className="p-4 font-mono text-xs sm:p-6 sm:text-sm">
                <div className="space-y-1">

                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">1</span>
                    <div className="flex-1">
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="syntax-variable">aboutMe</span>{" "}
                      <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                      <span className="text-dark-600 dark:text-dark-400">{"{"}</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">2</span>
                    <div className="flex-1 pl-3">
                      <span className="text-dark-600 dark:text-dark-400">experience:</span>{" "}
                      <span className="syntax-string">"2+ years building scalable solutions"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">3</span>
                    <div className="flex-1 pl-3">
                      <span className="text-dark-600 dark:text-dark-400">specialization:</span>{" "}
                      <span className="syntax-string">"Backend Development, API and Database Design"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">4</span>
                    <div className="flex-1 pl-3">
                      <span className="text-dark-600 dark:text-dark-400">focus:</span>{" "}
                      <span className="text-dark-600 dark:text-dark-400">[</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">5</span>
                    <div className="flex-1 pl-6">
                      <span className="syntax-string">"Performance optimization"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">6</span>
                    <div className="flex-1 pl-6">
                      <span className="syntax-string">"Clean architecture"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">7</span>
                    <div className="flex-1 pl-6">
                      <span className="syntax-string">"Efficient Solutions"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">8</span>
                    <div className="flex-1 pl-6">
                      <span className="syntax-string">"High Code Quality"</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">9</span>
                    <div className="flex-1 pl-3">
                      <span className="text-dark-600 dark:text-dark-400">],</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">10</span>
                    <div className="flex-1 pl-3">
                      <span className="text-dark-600 dark:text-dark-400">passion:</span>{" "}
                      <span className="syntax-string">"Exploring new technologies and building scalable, maintainable systems."</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">11</span>
                    <div className="flex-1 pl-3">
                      <span className="syntax-function">getPhilosophy</span>
                      <span className="text-dark-600 dark:text-dark-400">:</span>{" "}
                      <span className="text-dark-600 dark:text-dark-400">() =&gt;</span>{" "}
                      <span className="text-dark-600 dark:text-dark-400">{"{"}</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">12</span>
                    <div className="flex-1 pl-6">
                      <span className="syntax-keyword">return</span>{" "}
                      <span className="syntax-string">"Code that's efficient, readable & adaptable"</span>
                      <span className="text-dark-600 dark:text-dark-400">;</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">13</span>
                    <div className="flex-1 pl-3">
                      <span className="text-dark-600 dark:text-dark-400">{"}"}</span>
                    </div>
                  </div>


                  <div className="flex gap-3">
                    <span className="select-none text-dark-400 dark:text-dark-600">14</span>
                    <div className="flex-1">
                      <span className="text-dark-600 dark:text-dark-400">{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-6 pt-8 max-w-sm mx-auto">
              <div className="text-center">
                <div className="font-mono text-3xl font-bold text-primary-600 dark:text-primary-400">
                  2+
                </div>
                <div className="mt-1 text-sm text-dark-600 dark:text-dark-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="font-mono text-3xl font-bold text-primary-600 dark:text-primary-400">
                  5+
                </div>
                <div className="mt-1 text-sm text-dark-600 dark:text-dark-400">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>


          <div className="space-y-8">
            <div>
              <h3 className="mb-6 font-mono text-2xl font-bold text-dark-900 dark:text-white">
                <span className="syntax-comment">// </span>Skills & Expertise
              </h3>
            </div>

            {skills.map((skillCategory, index) => (
              <div
                key={skillCategory.category}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="mb-3 font-mono text-lg font-semibold text-dark-800 dark:text-dark-200">
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-primary-200 bg-primary-50 px-4 py-2 font-mono text-sm font-medium text-primary-700 transition-all hover:border-primary-400 hover:bg-primary-100 dark:border-primary-800 dark:bg-dark-800 dark:text-primary-300 dark:hover:border-primary-600 dark:hover:bg-dark-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
