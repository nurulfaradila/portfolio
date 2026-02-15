"use client";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-primary-50/50 py-20 dark:bg-dark-950 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
            <span className="syntax-comment">// </span>Experience
          </h2>
          <h3 className="text-4xl font-bold text-dark-900 dark:text-white lg:text-5xl">
            Professional Journey
          </h3>
        </div>

        <div className="relative">
          {experiences.length > 1 && (
            <div className="absolute left-0 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 dark:from-primary-400 dark:to-primary-600 lg:left-1/2 lg:block lg:-translate-x-1/2"></div>
          )}


          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative ${experiences.length === 1
                  ? "flex justify-center"
                  : index % 2 === 0
                    ? "lg:pr-12 lg:text-right"
                    : "lg:pl-12 lg:text-left"
                  }`}
              >
                <div
                  className={`${experiences.length === 1
                    ? "w-full max-w-2xl text-left"
                    : "lg:w-1/2"
                    } ${index % 2 === 0 && experiences.length > 1 ? "lg:ml-auto" : index % 2 !== 0 && experiences.length > 1 ? "lg:mr-auto" : ""} group`}
                >
                  {experiences.length > 1 && (
                    <div className="absolute left-0 top-0 hidden h-4 w-4 rounded-full bg-primary-500 ring-4 ring-primary-100 dark:bg-primary-400 dark:ring-dark-900 lg:left-1/2 lg:block lg:-translate-x-1/2"></div>
                  )}

                  <div className="rounded-xl border border-dark-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:border-dark-800 dark:bg-dark-900 sm:p-8">

                    <div className="rounded-lg border border-dark-200 bg-dark-50/50 dark:border-dark-700 dark:bg-dark-800/50">

                      <div className="flex items-center gap-2 border-b border-dark-200 bg-dark-100 px-3 py-2 dark:border-dark-700 dark:bg-dark-800">
                        <div className="flex gap-1.5">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                        <span className="ml-2 font-mono text-xs text-dark-600 dark:text-dark-400">
                          {exp.company.toLowerCase().replace(/\s+/g, "_")}.tsx
                        </span>
                      </div>


                      <div className="p-4 font-mono text-xs sm:text-sm">
                        <div className="space-y-1">

                          <div className="flex gap-3">
                            <span className="select-none text-dark-400 dark:text-dark-600">1</span>
                            <div className="flex-1">
                              <span className="syntax-keyword">const</span>{" "}
                              <span className="syntax-variable">position</span>{" "}
                              <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                              <span className="text-lg font-bold text-dark-900 dark:text-white">"{exp.position}"</span>
                              <span className="text-dark-600 dark:text-dark-400">;</span>
                            </div>
                          </div>


                          <div className="flex gap-3">
                            <span className="select-none text-dark-400 dark:text-dark-600">2</span>
                            <div className="flex-1">
                              <span className="syntax-keyword">const</span>{" "}
                              <span className="syntax-variable">company</span>{" "}
                              <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                              <span className="font-semibold text-primary-600 dark:text-primary-400">"{exp.company}"</span>
                              <span className="text-dark-600 dark:text-dark-400">;</span>
                            </div>
                          </div>


                          <div className="flex gap-3">
                            <span className="select-none text-dark-400 dark:text-dark-600">3</span>
                            <div className="flex-1">
                              <span className="syntax-keyword">const</span>{" "}
                              <span className="syntax-variable">period</span>{" "}
                              <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                              <span className="syntax-string">"{exp.duration} | {exp.location}"</span>
                              <span className="text-dark-600 dark:text-dark-400">;</span>
                            </div>
                          </div>


                          <div className="flex gap-3">
                            <span className="select-none text-dark-400 dark:text-dark-600">4</span>
                            <div className="flex-1">
                              <span className="syntax-keyword">const</span>{" "}
                              <span className="syntax-variable">description</span>{" "}
                              <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                              <span className="text-dark-600 dark:text-dark-400">[</span>
                            </div>
                          </div>


                          {exp.description.map((point, i) => (
                            <div key={i} className="flex gap-3">
                              <span className="select-none text-dark-400 dark:text-dark-600">{5 + i}</span>
                              <div className="flex-1 pl-3">
                                <span className="syntax-string whitespace-pre-wrap">"{point}"</span>
                                {i < exp.description.length - 1 && (
                                  <span className="text-dark-600 dark:text-dark-400">,</span>
                                )}
                              </div>
                            </div>
                          ))}


                          <div className="flex gap-3">
                            <span className="select-none text-dark-400 dark:text-dark-600">{5 + exp.description.length}</span>
                            <div className="flex-1">
                              <span className="text-dark-600 dark:text-dark-400">];</span>
                            </div>
                          </div>


                          <div className="flex gap-3">
                            <span className="select-none text-dark-400 dark:text-dark-600">{6 + exp.description.length}</span>
                            <div className="flex-1">
                              <span className="syntax-keyword">const</span>{" "}
                              <span className="syntax-variable">achievements</span>{" "}
                              <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                              <span className="text-dark-600 dark:text-dark-400">[</span>
                            </div>
                          </div>


                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex gap-3">
                              <span className="select-none text-dark-400 dark:text-dark-600">{7 + exp.description.length + i}</span>
                              <div className="flex-1 pl-3">
                                <span className="syntax-string whitespace-pre-wrap">"{achievement}"</span>
                                {i < exp.achievements.length - 1 && (
                                  <span className="text-dark-600 dark:text-dark-400">,</span>
                                )}
                              </div>
                            </div>
                          ))}


                          <div className="flex gap-3">
                            <span className="select-none text-dark-400 dark:text-dark-600">{7 + exp.description.length + exp.achievements.length}</span>
                            <div className="flex-1">
                              <span className="text-dark-600 dark:text-dark-400">];</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-primary-200 bg-primary-100 px-3 py-1 font-mono text-xs font-medium text-primary-700 dark:border-primary-800 dark:bg-dark-800 dark:text-primary-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
