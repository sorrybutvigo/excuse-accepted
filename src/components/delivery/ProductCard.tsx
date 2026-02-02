import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import type { Tables } from "@/integrations/supabase/types";

type Product = Tables<"products">;

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      {/* Product image */}
      <div className="aspect-square bg-muted overflow-hidden">
        {product.imagen_url ? (
          <img
            src={product.imagen_url}
            alt={product.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Sin imagen
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-sm md:text-base truncate">
          {product.nombre}
        </h3>
        {product.descripcion && (
          <p className="text-muted-foreground text-xs md:text-sm mt-1 line-clamp-2">
            {product.descripcion}
          </p>
        )}

        <div className="flex items-center justify-between mt-3">
          <span className="text-primary font-bold text-lg">
            {Number(product.precio).toFixed(2)}€
          </span>
          <Button
            size="sm"
            onClick={() => addItem(product)}
            className="gap-1"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Añadir</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
