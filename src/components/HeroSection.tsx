import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="SORRYBUT - Burger restaurant atmosphere"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 glow-text-purple"
          >
            TRÁGATE TUS
            <br />
            <span className="text-primary">EXCUSAS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-body mb-12 max-w-2xl mx-auto"
          >
            Cocina non-stop. Burgers gourmet y brunch todo el día.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu?mode=brunch"
              onClick={() => window.scrollTo(0, 0)}
              className="btn-neon-orange px-8 py-4 text-lg sm:text-xl text-center"
            >
              MODO BRUNCH
            </Link>
            <Link
              to="/menu?mode=burger"
              onClick={() => window.scrollTo(0, 0)}
              className="btn-neon-purple px-8 py-4 text-lg sm:text-xl text-center"
            >
              MODO BURGER
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
