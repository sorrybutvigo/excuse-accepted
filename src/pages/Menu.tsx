import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import burgerTrufada from "@/assets/burger-trufada.png";
import burgerBlackGarlic from "@/assets/burger-black-garlic.png";
import burgerEmmy from "@/assets/burger-emmy.png";
import burgerPulletBeef from "@/assets/burger-pullet-beef.png";
import burgerSmokyChipotle from "@/assets/burger-smoky-chipotle.png";
import burgerCheeseburger from "@/assets/burger-cheeseburger.png";
import burgerBaconLover from "@/assets/burger-bacon-lover.png";
import burgerLaClasica from "@/assets/burger-la-clasica.png";
import tostaBianca from "@/assets/tosta-bianca.png";
import tostaBenedict from "@/assets/tosta-benedict.png";
import tostaPocheVerde from "@/assets/tosta-poche-verde.png";
import tostaBufala from "@/assets/tosta-bufala.png";
import tostaNordica from "@/assets/tosta-nordica.png";
import tostaRoyale from "@/assets/tosta-royale.png";
import tostaGallega from "@/assets/tosta-gallega.png";
import tostaPortuguesa from "@/assets/tosta-portuguesa.png";
import tostaAceite from "@/assets/tosta-aceite.png";
import tostaJamonSerrano from "@/assets/tosta-jamon-serrano.png";
import tostaAceiteTomate from "@/assets/tosta-aceite-tomate.png";
import tostaMantequillaMermelada from "@/assets/tosta-mantequilla-mermelada.png";
import tostaCacahuetePlatano from "@/assets/tosta-cacahuete-platano.png";
import tostaPistachoFrambuesa from "@/assets/tosta-pistacho-frambuesa.png";

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
    {
      id: 3,
      name: "AFTER WORK",
      description: "Hamburguesa de Ternera Gallega Suprema, cebolla caramelizada, salsa Emmy, queso Arzúa y piparras",
      price: "12,50€",
      image: burgerEmmy,
    },
    {
      id: 4,
      name: "PULLED BEEF",
      description: "Queso cheddar, queso gorgonzola, cebolla encurtida, guacamole",
      price: "12,90€",
      image: burgerPulletBeef,
    },
    {
      id: 5,
      name: "SMOKY CHIPOTLE",
      description: "Hamburguesa de Ternera Gallega Suprema, bacon crujiente, doble de queso cheddar, salsa chipotle",
      price: "11,90€",
      image: burgerSmokyChipotle,
    },
    {
      id: 6,
      name: "CHEESEBURGER",
      description: "Hamburguesa de Ternera Gallega Suprema, queso cheddar",
      price: "9,90€",
      image: burgerCheeseburger,
    },
    {
      id: 7,
      name: "BACON LOVER",
      description: "Hamburguesa de Ternera Gallega Suprema, doble de queso cheddar, cebolla caramelizada, bacon crujiente, pepinillo y salsa de bacon",
      price: "12,90€",
      image: burgerBaconLover,
    },
    {
      id: 8,
      name: "LA CLÁSICA",
      description: "Hamburguesa de ternera gallega, queso cheese, lechuga, tomate, cebolla y pepinillo",
      price: "10,90€",
      image: burgerLaClasica,
    },
  ],
  brunch: [
    {
      id: 1,
      name: "POCHE VERDE",
      description: "Aguacate, huevo poché, rúcula, semillas calabaza, pesto",
      price: "8,90€",
      image: tostaPocheVerde,
    },
    {
      id: 2,
      name: "LA BÚFALA",
      description: "Tomate cherry y búfala",
      price: "8,50€",
      image: tostaBufala,
    },
    {
      id: 3,
      name: "NÓRDICA",
      description: "Huevos revueltos, salmón ahumado, rúcula",
      price: "8,90€",
      image: tostaNordica,
    },
    {
      id: 4,
      name: "ROYALE",
      description: "Huevo poché, jamón cocido, salsa holandesa, rúcula",
      price: "8,70€",
      image: tostaRoyale,
    },
    {
      id: 5,
      name: "LA BIANCA",
      description: "Ricotta cremosa, miel cruda, nueces",
      price: "7,90€",
      image: tostaBianca,
    },
    {
      id: 6,
      name: "BENEDICT",
      description: "Aguacate, huevo poché, rúcula, semillas calabaza, salsa holandesa, pimentón dulce",
      price: "8,90€",
      image: tostaBenedict,
    },
    {
      id: 7,
      name: "GALLEGA",
      description: "Huevo poché, salsa de bacon, espinaca, rúcula, queso Arzúa",
      price: "8,70€",
      image: tostaGallega,
    },
    {
      id: 8,
      name: "PORTUGUESA",
      description: "Queso cheddar, jamón cocido, mostaza antigua con miel",
      price: "8,70€",
      image: tostaPortuguesa,
    },
    {
      id: 9,
      name: "ACEITE",
      description: "Aceite Virgen Extra",
      price: "3,20€",
      image: tostaAceite,
    },
    {
      id: 10,
      name: "JAMÓN SERRANO, TOMATE Y ACEITE",
      description: "Jamón serrano, tomate, aceite",
      price: "5,50€",
      image: tostaJamonSerrano,
    },
    {
      id: 11,
      name: "ACEITE Y TOMATE",
      description: "Aceite, tomate",
      price: "3,75€",
      image: tostaAceiteTomate,
    },
    {
      id: 12,
      name: "MANTEQUILLA Y MERMELADA",
      description: "Mantequilla, mermelada",
      price: "3,75€",
      image: tostaMantequillaMermelada,
    },
    {
      id: 13,
      name: "CREMA DE CACAHUETE Y PLÁTANO",
      description: "Crema de cacahuete, plátano",
      price: "5,50€",
      image: tostaCacahuetePlatano,
    },
    {
      id: 14,
      name: "CREMA DE PISTACHO Y FRAMBUESA",
      description: "Crema de pistacho, frambuesas",
      price: "5,90€",
      image: tostaPistachoFrambuesa,
    },
  ],
};

type MenuMode = "burger" | "brunch";

const Menu = () => {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState<MenuMode>("burger");

  useEffect(() => {
    const modeParam = searchParams.get("mode");
    if (modeParam === "brunch" || modeParam === "burger") {
      setMode(modeParam);
    }
  }, [searchParams]);

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
