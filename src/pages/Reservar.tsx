import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Phone, ArrowRight } from "lucide-react";

const REVO_FLOW_URL = "https://revoflow.works/widget/booking?widget_token=sY0PImoGMSMMi5CQpTgFm5NLrlqHp6WBUJmBuVZxlOQfhAOzvr44QEjjX8EbzwYK3sVvu5fsxJJ5H8gx&lang=es";

const Reservar = () => {
  const handleReservar = () => {
    window.open(REVO_FLOW_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-display text-5xl md:text-7xl lg:text-8xl mb-4">
                RESERVA <span className="text-primary glow-text-purple">MESA</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                No necesitas excusa para venir, pero sí una reserva.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              {/* Reservation Card */}
              <div className="bg-card border-2 border-border p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Calendar size={40} className="text-primary" />
                </div>
                
                <h2 className="text-display text-2xl md:text-3xl mb-4">
                  RESERVA TU EXPERIENCIA
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Selecciona fecha, hora y número de comensales. Recibirás confirmación inmediata.
                </p>

                <motion.button
                  onClick={handleReservar}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-neon-purple px-8 py-4 text-xl flex items-center justify-center gap-3 mx-auto mb-8"
                >
                  RESERVAR AHORA
                  <ArrowRight size={24} />
                </motion.button>

                <p className="text-muted-foreground text-sm">
                  Se abrirá nuestro sistema de reservas en una nueva ventana
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-card border border-border p-6 text-center">
                  <MapPin size={24} className="text-primary mx-auto mb-3" />
                  <h3 className="text-display text-sm mb-2">UBICACIÓN</h3>
                  <p className="text-muted-foreground text-sm">
                    Av. Montero Ríos 18<br />36201 Vigo
                  </p>
                </div>
                
                <div className="bg-card border border-border p-6 text-center">
                  <Clock size={24} className="text-secondary mx-auto mb-3" />
                  <h3 className="text-display text-sm mb-2">HORARIOS</h3>
                  <p className="text-muted-foreground text-sm">
                    Brunch: 9:00 - 16:00<br />Burger: 13:00 - 23:30
                  </p>
                </div>
                
                <div className="bg-card border border-border p-6 text-center">
                  <Phone size={24} className="text-primary mx-auto mb-3" />
                  <h3 className="text-display text-sm mb-2">CONTACTO</h3>
                  <p className="text-muted-foreground text-sm">
                    694 21 41 40<br />info@sorrybut.es
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reservar;
