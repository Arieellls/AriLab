"use client";

import { useState } from "react";
import { projects } from "../testing/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on difficulty
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.difficulty === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-4">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frontend Mentor Projects
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["All", "Newbie", "Junior", "Intermediate", "Advanced"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
