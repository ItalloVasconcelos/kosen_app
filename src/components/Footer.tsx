import React from "react";
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import { useTheme } from "./ThemeProvider";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Logo Column */}
          <div className={styles.logoColumn}>
            <div className={styles.logoBox}>
                <img
                    width={200}
                    src={"/images/logo_kosen_light.svg"}
                    alt="Kosen Energy Platform"
                    className={styles.heroImage}
                />
            </div>
          </div>

          {/* Vertical Divider */}
          <div className={styles.verticalDivider}></div>

          {/* Contact Info Column */}
          <div className={styles.infoColumn}>
            <h3 className={styles.companyName}>{t.footer.companyName}</h3>
            
            <div className={styles.contactItem}>
              <MapPin className={styles.contactIcon} />
              <span>{t.footer.address}</span>
            </div>
            
            <div>{t.footer.zipCode}</div>
            
            <div className={styles.contactItem}>
              <Mail className={styles.contactIcon} />
              <a href="mailto:contato@kosenenergy.com" className={styles.contactLink}>
                {t.footer.email}
              </a>
            </div>
            
            <div className={styles.contactItem}>
              <Phone className={styles.contactIcon} />
              <a href="tel:+55119999999" className={styles.contactLink}>
                {t.footer.phone}
              </a>
            </div>
            
            <div className={styles.contactItem}>
              <Mail className={styles.contactIcon} />
              <a href="#suporte" className={styles.contactLink}>
                {t.footer.support}
              </a>
            </div>
            
            <div className={styles.socialSection}>
              <p className={styles.socialTitle}>{t.footer.followUs}</p>
              <div className={styles.socialIcons}>
                {[
                  { icon: <Linkedin className={styles.socialIcon} />, href: "#linkedin" },
                  { icon: <Instagram className={styles.socialIcon} />, href: "#instagram" },
                  { icon: <Facebook className={styles.socialIcon} />, href: "#facebook" },
                  { icon: <Youtube className={styles.socialIcon} />, href: "#youtube" },
                  { icon: <Twitter className={styles.socialIcon} />, href: "#twitter" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    aria-label={`Visit our ${social.href.replace("#", "")} page`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
