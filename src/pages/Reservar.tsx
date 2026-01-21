import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const REVO_FLOW_WIDGET_URL = "https://revoflow.works/widget/booking?widget_token=sY0PImoGMSMMi5CQpTgFm5NLrlqHp6WBUJmBuVZxlOQfhAOzvr44QEjjX8EbzwYK3sVvu5fsxJJ5H8gx&lang=es";

const Reservar = () => {
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
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <iframe
                  src={REVO_FLOW_WIDGET_URL}
                  title="Reservar mesa - Revo Flow"
                  className="w-full min-h-[700px] md:min-h-[600px]"
                  allow="payment"
                  loading="lazy"
                />
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
