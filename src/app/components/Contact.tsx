import { Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-600 font-medium mb-4">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-600">
            Interested in working together or have a question about my projects?
            You can reach me through any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                className="lucide lucide-mail text-blue-600"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Feel free to email me anytime</p>
            <a
              href="mailto:hello@example.com"
              className="text-blue-600 font-medium"
            >
              arielitomanorina@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github size={20} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">GitHub</h3>
            <p className="text-gray-600 mb-4">Check out my repositories</p>
            <a
              href="https://github.com/Arieellls"
              target="_blank"
              className="text-blue-600 font-medium"
            >
              github.com/Arieellls
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                className="lucide lucide-linkedin text-blue-600"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
            <p className="text-gray-600 mb-4">Let's connect professionally</p>
            <a
              href="https://www.linkedin.com/in/arielitomanorina/"
              target="_blank"
              className="text-blue-600 font-medium"
            >
              linkedin.com/in/arielitomanorina
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
