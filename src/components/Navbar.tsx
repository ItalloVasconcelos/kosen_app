
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 glass-effect shadow-sm" 
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-10 w-32 bg-kosen-primary rounded-sm flex items-center justify-center text-white font-bold">
            KOSEN
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["Sobre nós", "Benefícios", "Recursos", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-kosen-dark hover:text-kosen-primary transition-ease font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className="h-6 w-6 text-kosen-dark" />
          ) : (
            <Menu className="h-6 w-6 text-kosen-dark" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="flex flex-col p-4">
            {["Sobre nós", "Benefícios", "Recursos", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="py-3 text-kosen-dark hover:text-kosen-primary transition-ease font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
