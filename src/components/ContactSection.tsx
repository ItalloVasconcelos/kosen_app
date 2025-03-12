
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const ContactSection = () => {
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Next Steps */}
        <div className="flex flex-col justify-center animate-fade-in-right">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Próximos passos
          </h2>
          
          <p className="text-kosen-muted mb-8 text-lg">
            Estamos prontos para ajudar você a transformar a forma como sua empresa ou residência consome energia. Nossos especialistas estão à disposição para encontrar a melhor solução para as suas necessidades.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-kosen-primary text-white px-6 py-3 rounded hover-lift hover:bg-kosen-primary/90 transition-ease flex items-center justify-center">
              <span>Compre o App da Kosen Energy</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            <button className="border border-kosen-primary text-kosen-primary px-6 py-3 rounded hover-lift hover:bg-kosen-primary/5 transition-ease">
              Teste o App da Kosen Energy
            </button>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-left">
          <h2 className="text-2xl font-semibold mb-6">
            Entre em contato
          </h2>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Mensagem enviada!</h3>
              <p className="text-kosen-muted text-center">
                Obrigado pelo seu contato. Responderemos em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  required
                  className="w-full border border-kosen-border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-kosen-primary/30 focus:border-kosen-primary/30 transition-all"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu e-mail"
                  required
                  className="w-full border border-kosen-border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-kosen-primary/30 focus:border-kosen-primary/30 transition-all"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Digite seu telefone"
                  className="w-full border border-kosen-border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-kosen-primary/30 focus:border-kosen-primary/30 transition-all"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem"
                  rows={4}
                  required
                  className="w-full border border-kosen-border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-kosen-primary/30 focus:border-kosen-primary/30 transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-kosen-primary text-white px-6 py-3 rounded hover:bg-kosen-primary/90 transition-all ${
                  isSubmitting 
                    ? "opacity-70 cursor-not-allowed" 
                    : "hover-lift"
                }`}
              >
                {isSubmitting ? "Enviando..." : "Entre em contato"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
