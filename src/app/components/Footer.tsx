import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-black font-semibold text-sm">FM</span>
            </div>
            <span className="font-medium text-lg">AriLab</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="mailto:arielitomanorina@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <a
            href="https://github.com/Arieellls"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/arielitomanorina/"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a> */}
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>
          Projects based on challenges from{" "}
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            className="underline hover:text-white transition-colors"
          >
            Frontend Mentor
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
  )
}