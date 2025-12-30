import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import burgerTrufada from "@/assets/burger-trufada.png";
import burgerBlackGarlic from "@/assets/burger-black-garlic.png";
import tostaBianca from "@/assets/tosta-bianca.png";
import tostaBenedict from "@/assets/tosta-benedict.png";

const menuData = {
  burger: [
    {
      id: 1,
      name: "TRUFADA",
      description: "Hamburguesa de Ternera Gallega Suprema, Queso Monterey Jack, huevo a la plancha, parmesano y salsa de trufa",
      price: "12,90€",
      image: burgerTrufada,
    },
    {
      id: 2,
      name: "BLACK GARLIC",
      description: "Hamburguesa de Ternera Gallega Suprema, tomate deshidratado, queso havarti, cebolla confitada, salsa ajo negro",
      price: "12,50€",
      image: burgerBlackGarlic,
    },
  ],
  brunch: [
    {
      id: 3,
      name: "LA BIANCA",
      description: "Ricotta cremosa, miel cruda, nueces",
      price: "7,90€",
      image: tostaBianca,
    },
    {
      id: 4,
      name: "BENEDICT",
      description: "Aguacate, huevo poché, rúcula, semillas calabaza, salsa holandesa, pimentón dulce",
      price: "8,90€",
      image: tostaBenedict,
    },
  ],
};

type MenuMode = "burger" | "brunch";

const Menu = () => {
  const [mode, setMode] = useState<MenuMode>("burger");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-display text-5xl md:text-7xl lg:text-8xl mb-8"
            >
              {mode === "burger" ? (
                <>
                  MODO <span className="text-primary glow-text-purple">BURGER</span>
                </>
              ) : (
                <>
                  MODO <span className="text-secondary glow-text-orange">BRUNCH</span>
                </>
              )}
            </motion.h1>

            {/* Mode Toggle */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setMode("brunch")}
                className={`px-6 py-3 text-display transition-all ${
                  mode === "brunch"
                    ? "btn-neon-orange"
                    : "bg-transparent border-2 border-muted text-muted-foreground hover:border-secondary hover:text-secondary"
                }`}
              >
                BRUNCH
              </button>
              <button
                onClick={() => setMode("burger")}
                className={`px-6 py-3 text-display transition-all ${
                  mode === "burger"
                    ? "btn-neon-purple"
                    : "bg-transparent border-2 border-muted text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                BURGER
              </button>
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="pb-20 md:pb-32">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {menuData[mode].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card-brutal flex flex-col md:flex-row overflow-hidden group"
                  >
                    <div className="md:w-1/3 aspect-square md:aspect-auto overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-display text-2xl md:text-3xl">{item.name}</h3>
                        <span className="price-tag text-lg">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
