
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import styles from "./ContactSection.module.css";

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
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Column - Next Steps */}
        <div className={styles.leftColumn}>
          <h2 className={styles.heading}>
            {t.nextSteps.title}
          </h2>
          
          <p className={styles.description}>
            {t.nextSteps.description}
          </p>
          
          <div className={styles.buttonContainer}>
            <button className={styles.primaryButton}>
              <span>{t.nextSteps.buyButton}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            <button className={styles.secondaryButton}>
              {t.nextSteps.tryButton}
            </button>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className={styles.rightColumn}>
          <h2 className={styles.formHeading}>
            {t.contact.title}
          </h2>
          
          {isSubmitted ? (
            <div className={styles.successContainer}>
              <CheckCircle className={styles.successIcon} />
              <h3 className={styles.successTitle}>{t.contact.form.success}</h3>
              <p className={styles.successMessage}>
                {t.contact.form.successMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
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
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
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
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  {t.contact.form.phone}
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.contact.form.phonePlaceholder}
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
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
                  className={styles.formTextarea}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.formButton}
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
