import { ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
              <span className="text-white font-semibold text-sm">FM</span>
            </div>
            <span
              className={`font-medium text-lg transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              AriLab
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors duration-300 text-sm font-medium hover:text-black ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="https://github.com/Arieellls"
              target="_blank"
              className={`flex items-center transition-colors duration-300 text-sm font-medium hover:text-black ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <span className="mr-1">GitHub</span>
              <ExternalLink size={14} />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="mt-4 md:hidden bg-white rounded-xl shadow-lg p-4 transition-all">
            <div className="flex flex-col space-y-3">
              {["Projects", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-black text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://github.com/Arieellls"
                target="_blank"
                className="flex items-center py-2 text-gray-700 hover:text-black text-sm font-medium"
              >
                <span className="mr-1">GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
