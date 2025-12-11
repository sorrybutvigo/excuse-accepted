import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Copy, Check, RefreshCw } from "lucide-react";

const allExcuses = [
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
  "Me pillaste con la boca llena",
  "Sorry, pero la salsa especial me llamaba",
  "Tenía una emergencia de sabor",
  "El pan brioche me hipnotizó",
  "Estoy en una relación seria con mi burger",
];

const Excuses = () => {
  const [currentExcuse, setCurrentExcuse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const generateExcuse = () => {
    setIsGenerating(true);
    setCopied(false);
    
    let count = 0;
    const interval = setInterval(() => {
      const randomExcuse = allExcuses[Math.floor(Math.random() * allExcuses.length)];
      setCurrentExcuse(randomExcuse);
      count++;
      
      if (count >= 10) {
        clearInterval(interval);
        setIsGenerating(false);
        const finalExcuse = allExcuses[Math.floor(Math.random() * allExcuses.length)];
        setCurrentExcuse(finalExcuse);
        setHistory(prev => [finalExcuse, ...prev.slice(0, 4)]);
      }
    }, 80);
  };

  const copyToClipboard = () => {
    if (currentExcuse) {
      navigator.clipboard.writeText(currentExcuse);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-24 min-h-screen flex flex-col">
        <section className="flex-1 flex items-center py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-display text-5xl md:text-7xl lg:text-8xl mb-4"
              >
                THE <span className="text-secondary glow-text-orange">EXCUSE</span>
                <br />
                GENERATOR
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg md:text-xl mb-12"
              >
                ¿Te pillaron comiendo? ¿Llegaste tarde por el brunch? Aquí tienes tu excusa perfecta.
              </motion.p>

              {/* Excuse Display */}
              <div className="min-h-[180px] md:min-h-[220px] flex items-center justify-center mb-8 p-6 border-2 border-border bg-card">
                <AnimatePresence mode="wait">
                  {currentExcuse ? (
                    <motion.div
                      key={currentExcuse}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center"
                    >
                      <p
                        className={`text-display text-2xl md:text-4xl lg:text-5xl mb-4 ${
                          isGenerating ? "text-muted-foreground animate-pulse" : "glow-text-orange"
                        }`}
                      >
                        "{currentExcuse}"
                      </p>
                      {!isGenerating && (
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onClick={copyToClipboard}
                          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {copied ? <Check size={18} /> : <Copy size={18} />}
                          {copied ? "COPIADO" : "COPIAR"}
                        </motion.button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-muted-foreground text-xl"
                    >
                      Haz clic en el botón para generar tu excusa
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
                className="btn-neon-orange px-10 py-5 text-xl md:text-2xl inline-flex items-center gap-3 disabled:opacity-50"
              >
                {isGenerating ? (
                  <RefreshCw className="animate-spin" size={24} />
                ) : (
                  <Sparkles size={24} />
                )}
                {isGenerating ? "GENERANDO..." : "NECESITO UNA EXCUSA"}
              </motion.button>

              {/* History */}
              {history.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-16"
                >
                  <h3 className="text-display text-xl mb-4 text-muted-foreground">TUS ÚLTIMAS EXCUSAS</h3>
                  <div className="space-y-2">
                    {history.map((excuse, index) => (
                      <motion.p
                        key={`${excuse}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-muted-foreground text-sm md:text-base py-2 border-b border-border/50"
                      >
                        "{excuse}"
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Excuses;
