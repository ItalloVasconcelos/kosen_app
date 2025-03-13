
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import LanguageSelector from "./LanguageSelector";
import styles from "./Navbar.module.css";

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
    { text: t.navbar.about, href: "#about" },
    { text: t.navbar.benefits, href: "#benefits" },
    { text: t.navbar.resources, href: "#resources" },
    { text: t.navbar.contact, href: "#contact" }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoBox}>
            KOSEN
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className={styles.navItem}
            >
              {item.text}
            </a>
          ))}
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContainer}>
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className={styles.mobileNavItem}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </a>
            ))}
            <div style={{ padding: "0.75rem 0" }}>
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
