
import { useState } from "react";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add actual form submission logic here
  };

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.container}>
        {/* Left Column - Next Steps */}
        <div className={styles.leftColumn}>
          <h2 className={styles.heading}>
            Próximos passos
          </h2>
          
          <p className={styles.description}>
            Um texto demonstrando para que o usuário entre em contato ou que ele visite as aplicações.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non elit non lacus consectetur egestas eget eu mauris. Suspendisse potenti.
            Etiam eget accumsan tellus, sed eleifend augue.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non elit non lacus consectetur egestas eget eu mauris. Suspendisse potenti.
            Etiam eget accumsan tellus, sed eleifend augue.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non elit non lacus consectetur egestas eget eu mauris. Suspendisse potenti.
            Etiam eget accumsan tellus, sed eleifend augue.
          </p>
          
          <div className={styles.buttonContainer}>
            <a href="#" className={styles.primaryButton}>
              {t.nextSteps.buyButton}
            </a>
            
            <a href="#" className={styles.secondaryButton}>
              {t.nextSteps.tryButton}
            </a>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className={styles.rightColumn}>
          <h2 className={styles.formHeading}>
            Entre em contato
          </h2>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
                required
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                required
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.formLabel}>
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Digite seu telefone para contato"
                className={styles.formInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Sua mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Digite sua mensagem"
                rows={4}
                required
                className={styles.formTextarea}
              />
              <div className={styles.charCount}>0/200</div>
            </div>
            
            <button
              type="submit"
              className={styles.formButton}
            >
              Entre em contato
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
