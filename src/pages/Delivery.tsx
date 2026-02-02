import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Clock, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/delivery/ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { isDeliveryOpen, getOperatingHours, getNextOpeningTime } from "@/utils/deliveryUtils";

type Category = "brunch" | "burger";

export default function Delivery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get("mode") as Category) || "brunch";
  const [category, setCategory] = useState<Category>(initialCategory);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const isOpen = isDeliveryOpen();

  // Fetch products
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("categoria", category)
        .eq("disponible", true)
        .order("subcategoria", { ascending: true })
        .order("nombre", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  // Get unique subcategories
  const subcategories = useMemo(() => {
    const subs = [...new Set(products.map((p) => p.subcategoria))];
    return subs;
  }, [products]);

  // Filter products by subcategory
  const filteredProducts = useMemo(() => {
    if (!activeSubcategory) return products;
    return products.filter((p) => p.subcategoria === activeSubcategory);
  }, [products, activeSubcategory]);

  // Handle category change
  const handleCategoryChange = (newCategory: Category) => {
    setCategory(newCategory);
    setActiveSubcategory(null);
    setSearchParams({ mode: newCategory });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 md:pt-24">
        {/* Closed banner */}
        {!isOpen && (
          <div className="bg-destructive/10 border-b border-destructive/20">
            <div className="container mx-auto px-4 py-3 flex items-center gap-3 text-destructive">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <div>
                <p className="font-medium">{getNextOpeningTime()}</p>
                <p className="text-sm opacity-80">
                  Horario de delivery: {getOperatingHours()}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <section className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
              <Clock className="h-4 w-4" />
              <span>Horario: {getOperatingHours()}</span>
            </div>
            <h1 className="text-display text-3xl md:text-4xl font-bold">
              Pide a domicilio
            </h1>
            <p className="text-muted-foreground mt-2">
              Envío en radio de 3km desde Avenida Montero Ríos 18, Vigo
            </p>
          </div>
        </section>

        {/* Category tabs */}
        <section className="sticky top-16 md:top-20 z-40 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-1 py-2">
              <button
                onClick={() => handleCategoryChange("brunch")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "brunch"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                Brunch
              </button>
              <button
                onClick={() => handleCategoryChange("burger")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "burger"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                Burger
              </button>
            </div>
          </div>
        </section>

        {/* Subcategory filters */}
        {subcategories.length > 0 && (
          <section className="border-b border-border bg-card/50">
            <div className="container mx-auto px-4">
              <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
                <button
                  onClick={() => setActiveSubcategory(null)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    !activeSubcategory
                      ? "bg-foreground text-background"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  Todos
                </button>
                {subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubcategory(sub)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                      activeSubcategory === sub
                        ? "bg-foreground text-background"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Products grid */}
        <section className="container mx-auto px-4 py-8">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted animate-pulse rounded-lg"
                />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No hay productos disponibles en esta categoría
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${category}-${activeSubcategory}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
