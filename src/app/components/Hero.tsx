import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_35%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Frontend Mentor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Project Portfolio
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
            A showcase of my frontend development journey through challenges
            that demonstrate my skills in creating modern, responsive
            interfaces.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center group"
            >
              View Projects
              <ChevronRight
                size={16}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-white/30 text-white font-medium rounded-lg
                    hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#projects"
          className="text-white/50 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevrons-down"
          >
            <path d="m7 6 5 5 5-5" />
            <path d="m7 13 5 5 5-5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
