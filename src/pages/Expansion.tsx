import { motion } from "framer-motion";
import { Rocket, TrendingUp, Users, Award, MapPin, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reasons = [
  {
    icon: TrendingUp,
    title: "MODELO PROBADO",
    description: "Un concepto gastronómico único que ha conquistado a miles de clientes. Nuestras burgers y brunchs tienen una demanda constante.",
  },
  {
    icon: Users,
    title: "FORMACIÓN COMPLETA",
    description: "Te acompañamos en cada paso. Desde la apertura hasta la operativa diaria, nuestro equipo estará contigo.",
  },
  {
    icon: Award,
    title: "MARCA RECONOCIDA",
    description: "SORRYBUT no es solo comida, es actitud. Una marca con personalidad que conecta con el público joven y urbano.",
  },
  {
    icon: MapPin,
    title: "TERRITORIO EXCLUSIVO",
    description: "Garantizamos exclusividad territorial para que puedas desarrollar tu negocio sin competencia interna.",
  },
];

const stats = [
  { value: "2019", label: "AÑO DE FUNDACIÓN" },
  { value: "1000+", label: "CLIENTES SEMANALES" },
  { value: "95%", label: "SATISFACCIÓN" },
  { value: "100%", label: "COMPROMISO" },
];

const Expansion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold mb-6">
              FRANQUICIAS
            </span>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-none">
              ÚNETE A LA
              <span className="block text-primary">REVOLUCIÓN</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Abre tu propio SORRYBUT y forma parte de una marca que rompe moldes. 
              Sin excusas, solo resultados.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a href="#contacto">
                <Button size="lg" className="text-lg px-8 py-6 group">
                  QUIERO SABER MÁS
                  <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base opacity-80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-4">
              ¿POR QUÉ <span className="text-primary">SORRYBUT</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Más que una franquicia, una oportunidad de negocio con actitud
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card border border-border p-8 rounded-none hover:border-primary transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <reason.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-display text-xl md:text-2xl mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-4">
              EL <span className="text-primary">PROCESO</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Así de simple es unirte a la familia SORRYBUT
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "CONTACTO", desc: "Cuéntanos tu interés" },
              { step: "02", title: "REUNIÓN", desc: "Conocemos tu proyecto" },
              { step: "03", title: "FORMACIÓN", desc: "Te preparamos a fondo" },
              { step: "04", title: "APERTURA", desc: "¡Bienvenido a la familia!" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="text-6xl md:text-7xl font-display text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-display text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-4 h-6 w-6 text-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
              ¿LISTO PARA <span className="text-secondary">EMPEZAR</span>?
            </h2>
            <p className="text-lg md:text-xl opacity-80 mb-10">
              Da el primer paso hacia tu propio SORRYBUT. Contáctanos y te contamos todo lo que necesitas saber.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a 
                href="tel:986407645"
                className="flex items-center gap-3 text-lg hover:text-secondary transition-colors group"
              >
                <div className="p-3 border border-current group-hover:bg-secondary group-hover:border-secondary group-hover:text-secondary-foreground transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <span>986 40 76 45</span>
              </a>
              <a 
                href="mailto:hola@sorrybut.es?subject=Interés en franquicia SORRYBUT"
                className="flex items-center gap-3 text-lg hover:text-secondary transition-colors group"
              >
                <div className="p-3 border border-current group-hover:bg-secondary group-hover:border-secondary group-hover:text-secondary-foreground transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <span>hola@sorrybut.es</span>
              </a>
            </div>

            <a href="mailto:hola@sorrybut.es?subject=Interés en franquicia SORRYBUT">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-10 py-6"
              >
                CONTACTAR AHORA
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Expansion;
