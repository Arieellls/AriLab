import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/api/placeholder/640/480"
                  alt="Developer workspace"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl -z-10"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <p className="text-blue-600 font-medium mb-4">ABOUT ME</p>
            <h2 className="text-3xl font-bold mb-6">My Frontend Journey</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                Frontend Mentor has been instrumental in my growth as a
                developer, allowing me to bridge the gap between theory and
                practice through real-world design challenges.
              </p>
              <p>
                Each project has pushed me to master new skills and techniques
                while maintaining clean, accessible code that works across all
                devices and browsers.
              </p>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-medium">What I've mastered:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Modern CSS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>JavaScript/React</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Accessibility</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>API Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Performance</span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 font-medium mt-6 group"
              >
                <span>Let's work together</span>
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
