import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import camisetaProduct from "@/assets/camiseta-product.png";
import camisetaLifestyle from "@/assets/camiseta-lifestyle.png";
import sudaderaProduct from "@/assets/sudadera-product.png";
import sudaderaLifestyle from "@/assets/sudadera-lifestyle.png";

const products = [
  {
    id: 1,
    name: "SORRYBUT ESSENTIALS",
    type: "CAMISETA",
    price: "PRÓXIMAMENTE",
    description: "El básico que nunca pasa de moda. Algodón premium con el logo que lo dice todo.",
    productImage: camisetaProduct,
    lifestyleImage: camisetaLifestyle,
  },
  {
    id: 2,
    name: "SB QUARTER ZIP",
    type: "SUDADERA",
    price: "PRÓXIMAMENTE",
    description: "Suave por fuera, calentita por dentro. El uniforme oficial del brunch.",
    productImage: sudaderaProduct,
    lifestyleImage: sudaderaLifestyle,
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group card-brutal overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with hover swap */}
      <div className="relative aspect-square overflow-hidden">
        <motion.img
          src={product.productImage}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
          initial={false}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={product.lifestyleImage}
          alt={`${product.name} lifestyle`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-display">
            {product.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-display text-lg md:text-xl mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
        <p className="text-secondary font-display text-xl">{product.price}</p>
      </div>
    </motion.div>
  );
};

const ShopPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-display text-4xl md:text-6xl lg:text-7xl mb-4">
            LO QUE <span className="text-secondary">VISTES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Merch que grita más que tú después de comer.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
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
            to="/shop"
            onClick={() => window.scrollTo(0, 0)}
            className="btn-neon-purple px-8 py-4 inline-flex items-center gap-2 text-lg"
          >
            VER TODA LA COLECCIÓN
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopPreview;
