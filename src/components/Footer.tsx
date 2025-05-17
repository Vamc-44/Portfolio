
import { useEffect, useState } from "react";
import { Github } from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-6 mt-20 border-t border-lightest-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-slate hover:text-green transition-colors mx-4"
            >
              <Github size={20} />
            </a>
          </div>
          
          <p className="text-slate text-sm font-mono">
            Designed & Built with 
            <span className="text-green mx-1">❤</span>
          </p>
          
          <p className="text-slate text-xs mt-2 font-mono">
            © {new Date().getFullYear()} | Data Science Portfolio
          </p>
        </div>
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 bg-green text-navy rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-80 transition-all z-50"
          aria-label="Scroll to top"
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
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
