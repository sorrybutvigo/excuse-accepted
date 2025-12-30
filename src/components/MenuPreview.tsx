import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import burgerTrufada from "@/assets/burger-trufada.png";
import burgerBlackGarlic from "@/assets/burger-black-garlic.png";
import tostaBianca from "@/assets/tosta-bianca.png";
import tostaBenedict from "@/assets/tosta-benedict.png";

const menuItems = [
  {
    id: 1,
    name: "TRUFADA",
    description: "Ternera Gallega Suprema, Queso Monterey Jack, huevo a la plancha, parmesano y salsa de trufa",
    price: "12,90€",
    image: burgerTrufada,
    category: "BURGER",
  },
  {
    id: 2,
    name: "BLACK GARLIC",
    description: "Ternera Gallega Suprema, tomate deshidratado, queso havarti, cebolla confitada, salsa ajo negro",
    price: "12,50€",
    image: burgerBlackGarlic,
    category: "BURGER",
  },
  {
    id: 3,
    name: "LA BIANCA",
    description: "Ricotta cremosa, miel cruda, nueces",
    price: "7,90€",
    image: tostaBianca,
    category: "TOSTA",
  },
  {
    id: 4,
    name: "BENEDICT",
    description: "Aguacate, huevo poché, rúcula, semillas calabaza, salsa holandesa, pimentón dulce",
    price: "8,90€",
    image: tostaBenedict,
    category: "TOSTA",
  },
];

const MenuPreview = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-display text-4xl md:text-6xl lg:text-7xl mb-4">
            LO QUE <span className="text-primary">COMES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Platos que no necesitan excusa. Solo hambre.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group card-brutal overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-display">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="price-tag text-lg">{item.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-display text-2xl mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/menu"
            onClick={() => window.scrollTo(0, 0)}
            className="btn-outline-neon px-8 py-4 inline-flex items-center gap-2 text-lg"
          >
            VER MENÚ COMPLETO
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
