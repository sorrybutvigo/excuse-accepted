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
import croissant from "@/assets/croissant.png";
import croissantMermelada from "@/assets/croissant-mermelada.png";
import croissantMixto from "@/assets/croissant-mixto.png";
import croissantNutella from "@/assets/croissant-nutella.png";
import sandwichMixto from "@/assets/sandwich-mixto.png";
import bowlYogurt from "@/assets/bowl-yogurt.png";
import patatasPulledBeefArzua from "@/assets/patatas-pulled-beef-arzua.png";
import croquetasPulledBeef from "@/assets/croquetas-pulled-beef.png";
import croquetasJamonSerrano from "@/assets/croquetas-jamon-serrano.png";
import hummusRemolacha from "@/assets/hummus-remolacha.png";
import nachosBerenjena from "@/assets/nachos-berenjena.png";
import nachosGuacamole from "@/assets/nachos-guacamole.png";
import patatasBravas from "@/assets/patatas-bravas.png";
import patatasQuesoTrufadoBacon from "@/assets/patatas-queso-trufado-bacon.png";
import tequenosTartara from "@/assets/tequenos-tartara.png";
import fingersPollo from "@/assets/fingers-pollo.png";
import aguacatePoche from "@/assets/aguacate-poche.png";
import croquetasChipirones from "@/assets/croquetas-chipirones.png";
import ensaladaSalmonRuloCabra from "@/assets/ensalada-salmon-rulo-cabra.png";
import ensaladaCesar from "@/assets/ensalada-cesar.png";
import pechugaPolloPlancha from "@/assets/pechuga-pollo-plancha.png";
import urbanSteak from "@/assets/urban-steak.png";
import cachopo from "@/assets/cachopo.png";
import salmonPlancha from "@/assets/salmon-plancha.png";

import patatasBig from "@/assets/patatas-big.png";
import patatasMedium from "@/assets/patatas-medium.png";
import tartaPistacho from "@/assets/tarta-pistacho.png";
import tartaQueso from "@/assets/tarta-queso.png";
import mmBrownie from "@/assets/mm-brownie.png";

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
  brunchTostadas: [
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
  brunchBolleria: [
    {
      id: 1,
      name: "CROISSANT",
      description: "Croissant de mantequilla recién horneado",
      price: "2,75€",
      image: croissant,
    },
    {
      id: 2,
      name: "CROISSANT CON MERMELADA",
      description: "Croissant relleno de mermelada de pera con vainilla",
      price: "3,75€",
      image: croissantMermelada,
    },
    {
      id: 3,
      name: "CROISSANT MIXTO",
      description: "Croissant relleno de jamón y queso",
      price: "4,50€",
      image: croissantMixto,
    },
    {
      id: 4,
      name: "CROISSANT NUTELLA",
      description: "Croissant relleno de crema de cacao y avellana",
      price: "4,25€",
      image: croissantNutella,
    },
    {
      id: 5,
      name: "SANDWICH MIXTO",
      description: "Pan de molde relleno de jamón y queso",
      price: "4,50€",
      image: sandwichMixto,
    },
  ],
  brunchBowls: [
    {
      id: 1,
      name: "BOWL DE YOGURT A TU GUSTO",
      description: "Yogurt natural con toppings a elegir",
      price: "4,50€",
      image: bowlYogurt,
    },
  ],
  burgerCompartir: [
    {
      id: 1,
      name: "PATATAS CON PULLED BEEF Y QUESO DE ARZÚA",
      description: "Patatas fritas con pulled beef y queso de Arzúa gratinado",
      price: "11,90€",
      image: patatasPulledBeefArzua,
    },
    {
      id: 2,
      name: "CROQUETAS DE PULLED BEEF CASERAS",
      description: "Croquetas caseras de pulled beef",
      price: "9,90€",
      image: croquetasPulledBeef,
    },
    {
      id: 3,
      name: "CROQUETAS DE JAMÓN SERRANO CASERAS",
      description: "Croquetas caseras de jamón serrano",
      price: "9,90€",
      image: croquetasJamonSerrano,
    },
    {
      id: 4,
      name: "HUMMUS DE REMOLACHA Y GARBANZOS",
      description: "Hummus casero de remolacha y garbanzos",
      price: "9,90€",
      image: hummusRemolacha,
    },
    {
      id: 5,
      name: "NACHOS CON BERENJENA",
      description: "Nachos con berenjena asada",
      price: "9,90€",
      image: nachosBerenjena,
    },
    {
      id: 6,
      name: "NACHOS CON GUACAMOLE",
      description: "Nachos con guacamole casero",
      price: "9,90€",
      image: nachosGuacamole,
    },
    {
      id: 7,
      name: "PATATAS BRAVAS",
      description: "Patatas bravas con salsa brava casera",
      price: "7,90€",
      image: patatasBravas,
    },
    {
      id: 8,
      name: "PATATAS QUESO TRUFADO Y BACON",
      description: "Patatas con queso de oveja trufado y bacon crispy",
      price: "9,90€",
      image: patatasQuesoTrufadoBacon,
    },
    {
      id: 9,
      name: "TEQUEÑOS SALSA TÁRTARA",
      description: "Tequeños en salsa tártara",
      price: "9,90€",
      image: tequenosTartara,
    },
    {
      id: 10,
      name: "FINGERS DE POLLO",
      description: "Fingers de pollo crujientes",
      price: "9,90€",
      image: fingersPollo,
    },
    {
      id: 11,
      name: "AGUACATE POCHÉ",
      description: "Aguacate con huevo poché y bacon crujiente bañado en salsa holandesa",
      price: "8,90€",
      image: aguacatePoche,
    },
    {
      id: 12,
      name: "CROQUETAS DE CHIPIRONES CASERAS",
      description: "Croquetas caseras de chipirones (6 uds)",
      price: "9,90€",
      image: croquetasChipirones,
    },
  ],
  burgerEnsaladas: [
    {
      id: 1,
      name: "ENSALADA DE SALMÓN AHUMADO CON RULO DE CABRA",
      description: "Salmón ahumado, rulo de cabra, manzana y nueces",
      price: "14,90€",
      image: ensaladaSalmonRuloCabra,
    },
    {
      id: 2,
      name: "ENSALADA CESAR",
      description: "Picatostes, parmesano, lechuga, pechuga de pollo con salsa cesar",
      price: "12,90€",
      image: ensaladaCesar,
    },
  ],
  burgerCarnes: [
    { id: 1, name: "PECHUGA DE POLLO PLANCHA", description: "Pechuga de pollo a la plancha con patatas fritas", price: "12,90€", image: pechugaPolloPlancha },
    { id: 2, name: "URBAN STEAK", description: "Filete de ternera Gallega con patatas fritas", price: "15,90€", image: urbanSteak },
    { id: 3, name: "CACHOPO", description: "Cachopo de ternera Gallega con patatas fritas", price: "19,90€", image: cachopo },
  ],
  burgerPescados: [
    { id: 1, name: "SALMÓN PLANCHA", description: "Salmón a la plancha con parmentier de Boniato", price: "17,50€", image: salmonPlancha },
  ],
  burgerGuarniciones: [
    { id: 1, name: "PATATAS BIG", description: "", price: "4,90€", image: patatasBig },
    { id: 2, name: "PATATAS MEDIUM", description: "", price: "2,90€", image: patatasMedium },
  ],
  brunchDulces: [
    { id: 1, name: "TARTA DE PISTACHO", description: "Tarta de queso y pistacho casera", price: "5,90€", image: tartaPistacho },
    { id: 2, name: "TARTA DE QUESO", description: "Tarta de queso casera", price: "5,50€", image: tartaQueso },
    { id: 3, name: "M&M'S BROWNIE", description: "Brownie casero con M&M's", price: "5,90€", image: mmBrownie },
  ],
  burgerPostres: [
    { id: 1, name: "TARTA DE PISTACHO", description: "Tarta de queso y pistacho casera", price: "5,90€", image: tartaPistacho },
    { id: 2, name: "TARTA DE QUESO", description: "Tarta de queso casera", price: "5,50€", image: tartaQueso },
    { id: 3, name: "M&M'S BROWNIE", description: "Brownie casero con M&M's", price: "5,90€", image: mmBrownie },
  ],
};

type MenuMode = "burger" | "brunch";

const brunchSubmenus = ["Tostadas", "Bollería", "Bowls", "Dulces"] as const;
const burgerSubmenus = ["Burger", "Tostadas", "Compartir", "Ensaladas", "Carnes", "Pescados", "Guarniciones", "Postres"] as const;

type BrunchSubmenu = typeof brunchSubmenus[number];
type BurgerSubmenu = typeof burgerSubmenus[number];

const Menu = () => {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState<MenuMode>("burger");
  const [brunchSubmenu, setBrunchSubmenu] = useState<BrunchSubmenu>("Tostadas");
  const [burgerSubmenu, setBurgerSubmenu] = useState<BurgerSubmenu>("Burger");

  useEffect(() => {
    const modeParam = searchParams.get("mode");
    if (modeParam === "brunch" || modeParam === "burger") {
      setMode(modeParam);
    }
  }, [searchParams]);

  const getCurrentItems = () => {
    if (mode === "brunch") {
      if (brunchSubmenu === "Tostadas") return menuData.brunchTostadas;
      if (brunchSubmenu === "Bollería") return menuData.brunchBolleria;
      if (brunchSubmenu === "Bowls") return menuData.brunchBowls;
      if (brunchSubmenu === "Dulces") return menuData.brunchDulces;
    }
    if (mode === "burger") {
      if (burgerSubmenu === "Burger") return menuData.burger;
      if (burgerSubmenu === "Tostadas") return menuData.brunchTostadas;
      if (burgerSubmenu === "Compartir") return menuData.burgerCompartir;
      if (burgerSubmenu === "Ensaladas") return menuData.burgerEnsaladas;
      if (burgerSubmenu === "Carnes") return menuData.burgerCarnes;
      if (burgerSubmenu === "Pescados") return menuData.burgerPescados;
      if (burgerSubmenu === "Guarniciones") return menuData.burgerGuarniciones;
      if (burgerSubmenu === "Postres") return menuData.burgerPostres;
    }
    return [];
  };

  const currentItems = getCurrentItems();

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
            <div className="flex justify-center gap-4 mb-6">
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

            {/* Submenus */}
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-wrap justify-center gap-2 md:gap-3"
              >
                {mode === "brunch" ? (
                  brunchSubmenus.map((submenu) => (
                    <button
                      key={submenu}
                      onClick={() => setBrunchSubmenu(submenu)}
                      className={`px-4 py-2 text-sm md:text-base font-medium transition-all rounded-full ${
                        brunchSubmenu === submenu
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted/30 text-muted-foreground hover:bg-secondary/20 hover:text-secondary"
                      }`}
                    >
                      {submenu}
                    </button>
                  ))
                ) : (
                  burgerSubmenus.map((submenu) => (
                    <button
                      key={submenu}
                      onClick={() => setBurgerSubmenu(submenu)}
                      className={`px-4 py-2 text-sm md:text-base font-medium transition-all rounded-full ${
                        burgerSubmenu === submenu
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted/30 text-muted-foreground hover:bg-primary/20 hover:text-primary"
                      }`}
                    >
                      {submenu}
                    </button>
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="pb-20 md:pb-32">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              {currentItems.length > 0 ? (
                <motion.div
                  key={`${mode}-${mode === "brunch" ? brunchSubmenu : burgerSubmenu}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                  {currentItems.map((item, index) => (
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
              ) : (
                <motion.div
                  key={`${mode}-${mode === "brunch" ? brunchSubmenu : burgerSubmenu}-empty`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-20"
                >
                  <p className="text-muted-foreground text-xl">
                    Próximamente...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
