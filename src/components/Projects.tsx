"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.category.split(",").map((c) => c.trim())))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) =>
        p.category
          .split(",")
          .map((c) => c.trim())
          .includes(selectedCategory)
      );

  return (
    <section id="projects" className="bg-white py-20 dark:bg-dark-900 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
            <span className="syntax-comment">// </span>Portfolio
          </h2>
          <h3 className="mb-6 text-4xl font-bold text-dark-900 dark:text-white lg:text-5xl">
            Projects
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-dark-600 dark:text-dark-300">
            A selection of projects showcasing scalable, production-ready applications.
          </p>
        </div>


        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-6 py-2.5 font-mono text-sm font-semibold transition-all ${selectedCategory === category
                ? "bg-primary-500 text-white shadow-lg shadow-primary-500/50"
                : "border border-primary-200 bg-primary-50 text-primary-700 hover:border-primary-400 hover:bg-primary-100 dark:border-primary-800 dark:bg-dark-800 dark:text-primary-300 dark:hover:border-primary-600 dark:hover:bg-dark-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group animate-fade-in-up rounded-xl border border-dark-200 bg-white shadow-lg transition-all hover:shadow-2xl dark:border-dark-800 dark:bg-dark-900"
              style={{ animationDelay: `${index * 100}ms` }}
            >

              <div className="relative h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-primary-500 to-primary-600">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-6xl text-white/20">💻</div>
                  </div>
                )}
                {project.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-600 shadow-sm dark:bg-dark-900/90 dark:text-primary-400">
                    ⭐ Featured
                  </span>
                )}
              </div>


              <div className="p-6">

                <div className="rounded-lg border border-dark-200 bg-dark-50/50 dark:border-dark-700 dark:bg-dark-800/50">

                  <div className="flex items-center gap-2 border-b border-dark-200 bg-dark-100 px-3 py-1.5 dark:border-dark-700 dark:bg-dark-800">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-1 font-mono text-[10px] text-dark-600 dark:text-dark-400">
                      {project.title.toLowerCase().replace(/\s+/g, "_")}.tsx
                    </span>
                  </div>


                  <div className="p-3 font-mono text-xs">
                    <div className="space-y-0.5">

                      <div className="flex gap-2">
                        <span className="select-none text-dark-400 dark:text-dark-600">1</span>
                        <div className="flex-1">
                          <span className="syntax-keyword">const</span>{" "}
                          <span className="syntax-variable">category</span>{" "}
                          <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                          <span className="syntax-string">"{project.category}"</span>
                          <span className="text-dark-600 dark:text-dark-400">;</span>
                        </div>
                      </div>


                      <div className="flex gap-2">
                        <span className="select-none text-dark-400 dark:text-dark-600">2</span>
                        <div className="flex-1">
                          <span className="syntax-keyword">const</span>{" "}
                          <span className="syntax-variable">title</span>{" "}
                          <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                          <span className="font-semibold text-dark-900 dark:text-white">"{project.title}"</span>
                          <span className="text-dark-600 dark:text-dark-400">;</span>
                        </div>
                      </div>


                      <div className="flex gap-2">
                        <span className="select-none text-dark-400 dark:text-dark-600">3</span>
                        <div className="flex-1">
                          <span className="syntax-keyword">const</span>{" "}
                          <span className="syntax-variable">description</span>{" "}
                          <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                          <span className="syntax-string whitespace-pre-wrap">"{project.description}"</span>
                          <span className="text-dark-600 dark:text-dark-400">;</span>
                        </div>
                      </div>


                      <div className="flex gap-2">
                        <span className="select-none text-dark-400 dark:text-dark-600">4</span>
                        <div className="flex-1">
                          <span className="syntax-keyword">const</span>{" "}
                          <span className="syntax-variable">tech</span>{" "}
                          <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                          <span className="text-dark-600 dark:text-dark-400">[</span>
                          {project.techStack.slice(0, 3).map((tech, idx) => (
                            <span key={tech}>
                              <span className="syntax-string">"{tech}"</span>
                              {idx < Math.min(2, project.techStack.length - 1) && (
                                <span className="text-dark-600 dark:text-dark-400">, </span>
                              )}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="text-dark-600 dark:text-dark-400">...</span>
                          )}
                          <span className="text-dark-600 dark:text-dark-400">];</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 rounded-lg bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-600"
                  >
                    View Details
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border-2 border-primary-500 p-2 text-primary-600 transition-all hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400"
                      aria-label="View on GitHub"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-dark-900"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between border-b border-dark-200 bg-dark-100 px-4 py-3 dark:border-dark-700 dark:bg-dark-800">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className="font-mono text-xs text-dark-600 dark:text-dark-400">
                  project_details/{selectedProject.title.toLowerCase().replace(/\s+/g, "_")}.md
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-1 text-dark-600 transition-colors hover:bg-dark-200 hover:text-dark-900 dark:text-dark-400 dark:hover:bg-dark-700 dark:hover:text-white"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-48px)] p-6 dark:bg-dark-950 lg:p-10">
              <div className="mb-8 overflow-hidden rounded-xl border border-dark-200 bg-dark-50/50 p-6 font-mono text-sm dark:border-dark-800 dark:bg-dark-900/50">
                <div className="space-y-4">

                  <div className="flex gap-4">
                    <span className="w-4 select-none text-right text-dark-400 dark:text-dark-600">1</span>
                    <div>
                      <span className="syntax-comment">// {selectedProject.title}</span>
                    </div>
                  </div>


                  <div className="flex gap-4">
                    <span className="w-4 select-none text-right text-dark-400 dark:text-dark-600">2</span>
                    <div>
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="syntax-variable">project</span>{" "}
                      <span className="text-dark-600 dark:text-dark-400">=</span>{" "}
                      <span className="text-dark-600 dark:text-dark-400">{"{"}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="w-4 select-none text-right text-dark-400 dark:text-dark-600">3</span>
                    <div className="pl-6">
                      <span className="syntax-variable">category</span>
                      <span className="text-dark-600 dark:text-dark-400">:</span>{" "}
                      <span className="syntax-string">"{selectedProject.category}"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-4">
                    <span className="w-4 select-none text-right text-dark-400 dark:text-dark-600">4</span>
                    <div className="pl-6">
                      <span className="syntax-variable">description</span>
                      <span className="text-dark-600 dark:text-dark-400">:</span>{" "}
                      <span className="syntax-string whitespace-pre-wrap">"{selectedProject.description}"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-4">
                    <span className="w-4 select-none text-right text-dark-400 dark:text-dark-600">5</span>
                    <div className="pl-6">
                      <span className="syntax-variable">problem</span>
                      <span className="text-dark-600 dark:text-dark-400">:</span>{" "}
                      <span className="syntax-string">"{selectedProject.problem}"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-4">
                    <span className="w-4 select-none text-right text-dark-400 dark:text-dark-600">6</span>
                    <div className="pl-6">
                      <span className="syntax-variable">solution</span>
                      <span className="text-dark-600 dark:text-dark-400">:</span>{" "}
                      <span className="syntax-string">"{selectedProject.solution}"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-4">
                    <span className="w-4 select-none text-right text-dark-400 dark:text-dark-600">7</span>
                    <div className="pl-6">
                      <span className="syntax-variable">results</span>
                      <span className="text-dark-600 dark:text-dark-400">:</span>{" "}
                      <span className="syntax-string">"{selectedProject.results}"</span>
                      <span className="text-dark-600 dark:text-dark-400">,</span>
                    </div>
                  </div>


                  <div className="flex gap-4">
                    <span className="w-4 select-none text-right text-dark-400 dark:text-dark-600">8</span>
                    <div>
                      <span className="text-dark-600 dark:text-dark-400">{"}"}</span>
                      <span className="text-dark-600 dark:text-dark-400">;</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="mb-4 flex items-center gap-2 font-mono text-lg font-bold text-dark-900 dark:text-white">
                    <span className="syntax-comment">// </span>Stack Items
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-primary-200 bg-primary-50 px-4 py-2 font-mono text-sm text-primary-700 dark:border-primary-800 dark:bg-primary-900/20 dark:text-primary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-end gap-4">
                  <h4 className="mb-0 flex items-center gap-2 font-mono text-lg font-bold text-dark-900 dark:text-white">
                    <span className="syntax-comment">// </span>Deployments
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-dark-900 px-6 py-3 font-mono text-sm font-semibold text-white transition-all hover:bg-dark-800 dark:bg-white dark:text-dark-900 dark:hover:bg-dark-100"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        github_repo()
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 font-mono text-sm font-semibold text-white transition-all hover:bg-primary-600"
                      >
                        live_demo()
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
