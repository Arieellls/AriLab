import { Code, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }: any) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide 
            ${
              project.difficulty === "Newbie"
                ? "bg-blue-50 text-blue-600"
                : project.difficulty === "Junior"
                ? "bg-emerald-50 text-emerald-600"
                : project.difficulty === "Intermediate"
                ? "bg-amber-50 text-amber-600"
                : "bg-rose-50 text-rose-600"
            }`}
        >
          {project.difficulty}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: any) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <a
            href={project.liveUrl}
            target="_blank"
            className="flex items-center text-gray-700 hover:text-black font-medium text-sm group"
          >
            <span>Live Demo</span>
            <ExternalLink
              size={14}
              className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          {/* <a
            href={project.codeUrl}
            target="_blank"
            className="flex items-center text-gray-700 hover:text-black font-medium text-sm group"
          >
            <span>View Code</span>
            <Code
              size={14}
              className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}
