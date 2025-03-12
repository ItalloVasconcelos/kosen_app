
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

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer id="contato" className="bg-kosen-dark text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo Column */}
          <div className="animate-fade-in-right">
            <div className="h-10 w-32 bg-white rounded-sm flex items-center justify-center text-kosen-primary font-bold mb-8">
              KOSEN
            </div>
          </div>
          
          {/* Contact Info Column */}
          <div className="space-y-3 animate-fade-in">
            <h3 className="font-semibold text-lg mb-4">{t.footer.companyName}</h3>
            
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-white/70 mt-0.5" />
              <span>{t.footer.address}</span>
            </div>
            
            <div>{t.footer.zipCode}</div>
            
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-white/70" />
              <a href="mailto:contato@kosenenergy.com" className="text-kosen-secondary hover:text-white transition-colors">
                {t.footer.email}
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-white/70" />
              <a href="tel:+55119999999" className="text-kosen-secondary hover:text-white transition-colors">
                {t.footer.phone}
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-white/70" />
              <a href="#suporte" className="text-kosen-secondary hover:text-white transition-colors">
                {t.footer.support}
              </a>
            </div>
            
            <div className="mt-8">
              <p>{t.footer.followUs}</p>
              <div className="flex gap-4 mt-4">
                {[
                  { icon: <Linkedin className="h-5 w-5" />, href: "#linkedin" },
                  { icon: <Instagram className="h-5 w-5" />, href: "#instagram" },
                  { icon: <Facebook className="h-5 w-5" />, href: "#facebook" },
                  { icon: <Youtube className="h-5 w-5" />, href: "#youtube" },
                  { icon: <Twitter className="h-5 w-5" />, href: "#twitter" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/10 p-2 rounded-full hover:bg-kosen-primary transition-all hover-lift"
                    aria-label={`Visit our ${social.href.replace("#", "")} page`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-white/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>{t.footer.copyright}</div>
          <div className="flex gap-6">
            <a href="#termos" className="hover:text-white transition-colors">{t.footer.termsOfUse}</a>
            <a href="#privacidade" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
