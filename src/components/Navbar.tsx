
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();
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

  const menuItems = [
    { text: t.navbar.about, href: "#sobre-nos" },
    { text: t.navbar.benefits, href: "#beneficios" },
    { text: t.navbar.resources, href: "#recursos" },
    { text: t.navbar.contact, href: "#contato" }
  ];

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
          {menuItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="text-kosen-dark hover:text-kosen-primary transition-ease font-medium"
            >
              {item.text}
            </a>
          ))}
          <LanguageSelector />
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
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="py-3 text-kosen-dark hover:text-kosen-primary transition-ease font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </a>
            ))}
            <div className="py-3">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
