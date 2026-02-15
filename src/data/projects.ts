import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "automated-test-framework",
    title: "PCB Defect Detection System",
    description:
      "Built a full-stack AI system for automated PCB defect detection using deep learning and a production-ready architecture.",
    problem:
      "Manual PCB inspection is time-consuming, error-prone, and difficult to scale in high-volume manufacturing.",
    solution:
      "Developed a YOLOv8-based defect detection pipeline integrated with FastAPI, asynchronous processing, and a user-friendly web interface.",
    results:
      "Enabled faster, more accurate, and scalable PCB inspections, reducing manual effort and improving quality control efficiency.",
    techStack: [
      "Python",
      "FastAPI",
      "Celery",
      "RabbitMQ",
      "PostgreSQL",
      "SQLAlchemy",
      "PyTorch",
      "YOLOv8",
      "Docker",
      "Streamlit",
    ],
    category: "Full-Stack, Backend, Machine Learning",
    image: "/projects/1.png",
    githubUrl: "https://github.com/nurulfaradila/pcb-defect-detection",
    featured: true,
  },
  {
    id: "selenium-automation-suite",
    title: "Manufacturing Monitoring System",
    description:
      "Created a real-time backend solution to monitor manufacturing test results and show PASS/FAIL status through a web dashboard.",
    problem:
      "Production test data from manufacturing lines was fragmented across machines, delaying defect detection and impacting yield and throughput.",
    solution:
      "Implemented an event-driven microservices backend using FastAPI, RabbitMQ, and MySQL to reliably ingest high-volume machine test data and stream real-time results to operators and engineers.",
    results:
      "Improved production visibility, accelerated defect identification on the line, and provided a scalable system to support continuous manufacturing operations.",
    techStack: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Uvicorn",
      "React",
      "Tailwind CSS",
      "MySQL",
      "SQLAlchemy",
      "aiomysql",
      "RabbitMQ",
      "Docker",
    ],
    category: "Full-Stack, Backend",
    image: "/projects/2.png",
    githubUrl: "https://github.com/nurulfaradila/manufacturing-monitoring",
    featured: true,
  },
  {
    id: "api-performance-tester",
    title: "E-commerce",
    description:
      "Developed a full-stack wedding invitation e-commerce platform using Go and React, supporting template customization and online checkout.",
    problem:
      "Manual invitation ordering made customization slow, error-prone, and hard to scale.",
    solution:
      "Implemented a clean-architecture Go backend with REST APIs and event-driven processing using RabbitMQ, paired with a modern React frontend.",
    results:
      "Delivered a scalable, production-ready system that demonstrates strong backend engineering and system design skills.",
    techStack: [
      "Golang",
      "MySQL",
      "RabbitMQ",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "CartContext",
      "Docker",
    ],
    category: "Full-Stack, Backend",
    image: "/projects/3.png",
    githubUrl: "https://github.com/nurulfaradila/performance-testing",
    featured: true,
  },
  {
    id: "qa-dashboard",
    title: "Website Portfolio",
    description:
      "Built a modern, responsive portfolio website using Next.js, React, and TypeScript to showcase projects and skills.",
    problem:
      "Lack of a fast, professional platform to effectively present technical skills and projects.",
    solution:
      "Developed a scalable, responsive portfolio using a modern frontend stack and best practices.",
    results:
      "Delivered a high-performance, recruiter-ready portfolio that is accessible and smooth to use.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ESLint",
      "Prettier",
      "PostCSS",
    ],
    category: "Full-Stack, Frontend",
    image: "/projects/4.png",
    githubUrl: "https://github.com/nurulfaradila/portfolio",
    featured: true,
  },
  {
    id: "dodo-ai-assistant",
    title: "DoDo - Local Document Assistant",
    description:
      "Built a private, local RAG system that allows users to chat with their PDF and TXT documents securely on their own machine.",
    problem:
      "Users often need to interrogate personal or sensitive documents but are concerned about data privacy when using cloud-based AI services.",
    solution:
      "Developed a local document assistant using Ollama (Phi model), FAISS for vector storage, and FastAPI for the backend, ensuring no data leaves the user's computer.",
    results:
      "Provided a high-performance, private solution for document analysis with low latency and zero data leakage.",
    techStack: [
      "Python",
      "FastAPI",
      "Ollama",
      "Phi-2",
      "FAISS",
      "Sentence-Transformers",
      "HTML",
      "JavaScript",
    ],
    category: "AI, Backend, Full-Stack",
    image: "/projects/5.png",
    githubUrl: "https://github.com/nurulfaradila/AI_chatbot",
    featured: true,
  },
];
