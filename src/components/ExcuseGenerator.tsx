import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const excuses = [
  "Lo siento, me pillas con las manos ocupadas",
  "Hoy voy que ardo",
  "No puedo, tengo hambre existencial",
  "Sorry, pero es que las burgers me llaman",
  "Estaba ocupado masticando mis problemas",
  "No es excusa, es filosofía de vida",
  "El queso derretido me tiene secuestrado",
  "Perdona, tenía una cita con el bacon",
  "Mi dieta empieza mañana... otra vez",
  "Es que el brunch no se come solo",
  "Lo siento, estoy en modo burger",
  "No tengo tiempo, tengo hambre",
  "El aguacate me necesitaba",
  "Sorry, pero el queso no espera",
  "Estaba investigando nuevos sabores",
];

const ExcuseGenerator = () => {
  const [currentExcuse, setCurrentExcuse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateExcuse = () => {
    setIsGenerating(true);
    
    // Quick shuffle animation
    let count = 0;
    const interval = setInterval(() => {
      const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
      setCurrentExcuse(randomExcuse);
      count++;
      
      if (count >= 8) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 100);
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display text-4xl md:text-6xl mb-4">
            THE <span className="text-secondary">EXCUSE</span> GENERATOR
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            ¿Necesitas una excusa? Nosotros te la damos.
          </p>

          {/* Excuse Display */}
          <div className="min-h-[120px] md:min-h-[150px] flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              {currentExcuse && (
                <motion.p
                  key={currentExcuse}
                  initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                  transition={{ duration: 0.2 }}
                  className={`text-display text-2xl md:text-4xl lg:text-5xl ${
                    isGenerating ? "text-muted-foreground" : "glow-text-orange"
                  }`}
                >
                  "{currentExcuse}"
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Generate Button */}
          <motion.button
            onClick={generateExcuse}
            disabled={isGenerating}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-neon-orange px-8 py-4 text-lg md:text-xl inline-flex items-center gap-3 disabled:opacity-50"
          >
            <Sparkles className={isGenerating ? "animate-spin" : ""} />
            NECESITO UNA EXCUSA
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExcuseGenerator;
