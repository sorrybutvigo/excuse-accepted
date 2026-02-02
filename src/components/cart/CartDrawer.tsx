import { X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import CartItem from "./CartItem";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, subtotal, deliveryFee, total, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Tu pedido
            </SheetTitle>
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground text-xs"
                onClick={clearCart}
              >
                Vaciar carrito
              </Button>
            )}
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">Tu carrito está vacío</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setIsOpen(false)}
            >
              Ver menú
            </Button>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto py-2">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>

            {/* Summary */}
            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{subtotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Envío</span>
                <span>{deliveryFee.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-primary">{total.toFixed(2)}€</span>
              </div>

              <Button
                asChild
                className="w-full mt-4"
                size="lg"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/checkout">
                  Continuar con el pedido
                </Link>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Envío gratuito a partir de 25€ • Radio máximo 3km
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
