import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                  <Cookie className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold mb-1">
                    ¡Usamos cookies! 🍪
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra{" "}
                    <Link 
                      to="/cookies" 
                      className="text-primary hover:underline font-medium"
                    >
                      política de cookies
                    </Link>
                    .
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReject}
                    className="w-full sm:w-auto"
                  >
                    Rechazar
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAccept}
                    className="w-full sm:w-auto"
                  >
                    Aceptar todas
                  </Button>
                </div>

                <button
                  onClick={handleReject}
                  className="absolute top-3 right-3 md:static p-1 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
