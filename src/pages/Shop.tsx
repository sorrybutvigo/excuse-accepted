import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag } from "lucide-react";

import tshirtProduct from "@/assets/tshirt-product.jpg";
import tshirtLifestyle from "@/assets/tshirt-lifestyle.jpg";
import hoodieProduct from "@/assets/hoodie-product.jpg";
import hoodieLifestyle from "@/assets/hoodie-lifestyle.jpg";
import bucketProduct from "@/assets/bucket-product.jpg";
import bucketLifestyle from "@/assets/bucket-lifestyle.jpg";
import socksProduct from "@/assets/socks-product.jpg";
import socksLifestyle from "@/assets/socks-lifestyle.jpg";

const products = [
  {
    id: 1,
    name: "A MÍ NO ME LA DAS CON QUESO",
    type: "CAMISETA",
    price: "35.00€",
    productImage: tshirtProduct,
    lifestyleImage: tshirtLifestyle,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "RESPECT",
    type: "HOODIE",
    price: "65.00€",
    productImage: hoodieProduct,
    lifestyleImage: hoodieLifestyle,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    name: "SORRY BUCKET",
    type: "BUCKET HAT",
    price: "28.00€",
    productImage: bucketProduct,
    lifestyleImage: bucketLifestyle,
    sizes: ["ÚNICA"],
  },
  {
    id: 4,
    name: "DIAMOND SOCKS",
    type: "CALCETINES",
    price: "12.00€",
    productImage: socksProduct,
    lifestyleImage: socksLifestyle,
    sizes: ["36-40", "41-45"],
  },
  {
    id: 5,
    name: "NO EXCUSES TEE",
    type: "CAMISETA",
    price: "35.00€",
    productImage: tshirtProduct,
    lifestyleImage: tshirtLifestyle,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "BURGER LOVER HOODIE",
    type: "HOODIE",
    price: "65.00€",
    productImage: hoodieProduct,
    lifestyleImage: hoodieLifestyle,
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group card-brutal overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with hover swap */}
      <div className="relative aspect-square overflow-hidden cursor-pointer">
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
          <span className="bg-foreground text-background px-3 py-1 text-xs font-display">
            {product.type}
          </span>
        </div>
        
        {/* Quick add button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-4 left-4 right-4 btn-neon-purple py-3 flex items-center justify-center gap-2"
        >
          <ShoppingBag size={18} />
          AÑADIR
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-display text-lg md:text-xl mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-secondary font-display text-xl">{product.price}</p>
          <div className="flex gap-1">
            {product.sizes.slice(0, 3).map((size) => (
              <span key={size} className="text-xs text-muted-foreground border border-border px-2 py-0.5">
                {size}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-xs text-muted-foreground">+{product.sizes.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Shop = () => {
  const [filter, setFilter] = useState<string>("ALL");
  const types = ["ALL", "CAMISETA", "HOODIE", "ACCESORIOS"];

  const filteredProducts = filter === "ALL" 
    ? products 
    : products.filter(p => 
        filter === "ACCESORIOS" 
          ? ["BUCKET HAT", "CALCETINES"].includes(p.type)
          : p.type === filter
      );

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
              className="text-display text-5xl md:text-7xl lg:text-8xl mb-4"
            >
              THE <span className="text-primary glow-text-purple">SHOP</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Merch que grita más que tú después de comer.
            </motion.p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="pb-20 md:pb-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto text-center p-12 border-2 border-dashed border-border"
            >
              <div className="text-6xl mb-6">🚧</div>
              <h2 className="text-display text-3xl md:text-4xl mb-4">
                PRÓXIMAMENTE
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Estamos preparando algo grande. Nuestra tienda online estará disponible muy pronto con merch exclusivo que no podrás dejar escapar.
              </p>
              <p className="text-sm text-muted-foreground">
                Síguenos en redes para no perderte el lanzamiento.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
