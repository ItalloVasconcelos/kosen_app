
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n/TranslationContext";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Next Steps */}
        <div className="flex flex-col justify-center animate-fade-in-right">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            {t.nextSteps.title}
          </h2>
          
          <p className="text-kosen-muted mb-8 text-lg leading-relaxed">
            {t.nextSteps.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-kosen-primary text-white px-6 py-3 rounded-md hover:bg-kosen-primary/90 transition-all duration-300 flex items-center justify-center group">
              <span>{t.nextSteps.buyButton}</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-kosen-primary text-kosen-primary px-6 py-3 rounded-md hover:bg-kosen-primary/5 transition-all duration-300">
              {t.nextSteps.tryButton}
            </button>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-left">
          <h2 className="text-2xl font-semibold mb-6">
            {t.contact.title}
          </h2>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">{t.contact.form.success}</h3>
              <p className="text-kosen-muted text-center">
                {t.contact.form.successMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-kosen-dark">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.namePlaceholder}
                  required
                  className="w-full border-2 border-kosen-border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-kosen-primary/30 focus:border-kosen-primary transition-all bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-kosen-dark">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                  className="w-full border-2 border-kosen-border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-kosen-primary/30 focus:border-kosen-primary transition-all bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-kosen-dark">
                  {t.contact.form.phone}
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.form.phonePlaceholder}
                  className="w-full border-2 border-kosen-border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-kosen-primary/30 focus:border-kosen-primary transition-all bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-kosen-dark">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.messagePlaceholder}
                  rows={4}
                  required
                  className="w-full border-2 border-kosen-border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-kosen-primary/30 focus:border-kosen-primary transition-all resize-none bg-white"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-kosen-primary text-white px-6 py-3 rounded-md transition-all duration-300 ${
                  isSubmitting 
                    ? "opacity-70 cursor-not-allowed" 
                    : "hover:bg-kosen-primary/90 transform hover:-translate-y-1"
                }`}
              >
                {isSubmitting ? t.contact.form.sending : t.contact.form.submitButton}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
