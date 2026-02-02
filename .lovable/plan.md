
# Plan: Insertar Productos y Continuar Implementacion

## Estado Actual
- Las tablas de la base de datos (`products`, `orders`, `order_items`) ya fueron creadas
- Stripe ya esta habilitado con la clave secreta configurada
- Falta poblar la tabla `products` con el menu completo

---

## Paso 1: Insertar Productos en la Base de Datos

Necesito ejecutar una migracion SQL para insertar todos los productos del menu. El SQL incluye:

### Productos de Brunch (26 items)
- **Tostadas**: La Bianca, Benedict, Poche Verde, La Royale, La Nordica, etc.
- **Bolleria**: Croissant, Croissant Mixto, Sandwich Mixto, etc.
- **Bowls**: Acai Bowl, Bowl de Yogurt, Arroz Integral
- **Dulces**: Tarta de Queso, Brownie, Tarta de Pistacho

### Productos de Burger (27 items)
- **Burgers**: Trufada, Black Garlic, La Clasica, Cheeseburger, etc.
- **Compartir**: Patatas, Nachos, Croquetas, Tequenos, etc.
- **Ensaladas**: Cesar, Salmon y Rulo de Cabra
- **Carnes**: Urban Steak, Pechuga de Pollo, Cachopo
- **Pescados**: Salmon a la Plancha
- **Postres**: Tarta de Queso, Brownie con Helado

---

## Paso 2: Crear el Sistema de Carrito

### Archivos a crear:
1. `src/contexts/CartContext.tsx` - Estado global del carrito
2. `src/components/cart/CartDrawer.tsx` - Panel lateral
3. `src/components/cart/CartItem.tsx` - Item individual

### Funcionalidades:
- Añadir/quitar productos
- Modificar cantidades
- Persistir en localStorage
- Calcular subtotal y total

---

## Paso 3: Pagina de Delivery

### Archivo: `src/pages/Delivery.tsx`

Caracteristicas:
- Filtros por categoria (Brunch/Burger)
- Subcategorias dinamicas
- Validacion de horario (9:30 - 00:00)
- Banner informativo si esta cerrado
- Tarjetas de producto con boton "Añadir"

---

## Paso 4: Actualizar Navegacion

### Modificar `src/components/Navbar.tsx`:
- Cambiar enlace "FOOD" para ir a `/delivery`
- Añadir icono de carrito con contador de items

### Modificar `src/App.tsx`:
- Añadir ruta `/delivery`
- Envolver app con `CartProvider`

---

## Paso 5: Checkout y Pagos (Siguiente Fase)

Una vez el carrito funcione:
1. Pagina de Checkout con formulario
2. Validacion de direccion (radio 3km)
3. Integracion con Stripe Elements
4. Edge function para crear Payment Intent

---

## Orden de Implementacion

```text
1. Insertar productos en DB
2. Crear CartContext
3. Crear CartDrawer
4. Crear pagina Delivery
5. Actualizar Navbar con carrito
6. Actualizar rutas en App.tsx
7. Probar flujo completo
```

---

## Archivos que se Modificaran

| Archivo | Cambio |
|---------|--------|
| `src/App.tsx` | Añadir CartProvider y ruta /delivery |
| `src/components/Navbar.tsx` | Añadir icono carrito |
| Nueva migracion SQL | Insertar productos |

## Archivos Nuevos

| Archivo | Proposito |
|---------|-----------|
| `src/contexts/CartContext.tsx` | Estado global carrito |
| `src/components/cart/CartDrawer.tsx` | Panel lateral |
| `src/components/cart/CartItem.tsx` | Item del carrito |
| `src/pages/Delivery.tsx` | Catalogo de productos |
| `src/components/delivery/ProductCard.tsx` | Tarjeta de producto |
| `src/utils/deliveryUtils.ts` | Validacion horario y zona |
