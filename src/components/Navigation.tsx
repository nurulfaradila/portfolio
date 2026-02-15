"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { scrollToSection } from "@/lib/utils";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 shadow-lg backdrop-blur-md dark:bg-dark-900/80"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          <button
            onClick={() => handleNavClick("home")}
            className="group font-mono text-xl font-bold tracking-tight transition-colors"
            aria-label="Go to home"
          >
            <span className="text-primary-600 dark:text-primary-400">~</span>
            <span className="text-dark-800 dark:text-dark-200">/</span>
            <span className="text-dark-800 transition-all group-hover:text-primary-600 dark:text-dark-200 dark:group-hover:text-primary-400">
              portfolio
            </span>
          </button>


          <div className="hidden items-center space-x-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-dark-800 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-dark-200 dark:hover:bg-dark-800 dark:hover:text-primary-400"
              >
                {item.name}
              </button>
            ))}


            <button
              onClick={toggleTheme}
              className="ml-4 rounded-lg p-2 text-dark-800 transition-colors hover:bg-primary-50 dark:text-dark-200 dark:hover:bg-dark-800"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </div>


          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-dark-800 transition-colors hover:bg-primary-50 dark:text-dark-200 dark:hover:bg-dark-800"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-dark-800 transition-colors hover:bg-primary-50 dark:text-dark-200 dark:hover:bg-dark-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>


      {isMobileMenuOpen && (
        <div className="border-t border-dark-200 bg-white dark:border-dark-800 dark:bg-dark-900 md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full rounded-lg px-4 py-3 text-left text-base font-medium text-dark-800 transition-colors hover:bg-primary-50 hover:text-primary-600 dark:text-dark-200 dark:hover:bg-dark-800 dark:hover:text-primary-400"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
