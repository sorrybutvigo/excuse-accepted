
# Plan: Tienda Online de Delivery para SORRYBUT

## Resumen del Proyecto
Convertir la sección FOOD en un sistema completo de pedidos online con delivery, restringido a un radio de 3km desde el local (Montero Ríos, Vigo) y con horario de 9:30 a 00:00.

---

## Fase 1: Base de Datos y Backend

### 1.1 Nuevas Tablas en la Base de Datos

```text
┌─────────────────────────────────────────────────────────────────┐
│                         PRODUCTOS                                │
├─────────────────────────────────────────────────────────────────┤
│ id, nombre, descripcion, precio, categoria, subcategoria,       │
│ imagen_url, disponible, created_at                               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                          PEDIDOS                                 │
├─────────────────────────────────────────────────────────────────┤
│ id, customer_email, customer_name, customer_phone,              │
│ delivery_address, delivery_lat, delivery_lng, delivery_notes,   │
│ subtotal, delivery_fee, total, status, payment_intent_id,       │
│ estimated_delivery_time, created_at, updated_at                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      PEDIDO_ITEMS                                │
├─────────────────────────────────────────────────────────────────┤
│ id, order_id, product_id, product_name, quantity, unit_price,   │
│ total_price, notes                                              │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Edge Functions Necesarias

| Función | Propósito |
|---------|-----------|
| `create-checkout` | Crear sesión de pago en Stripe |
| `stripe-webhook` | Recibir confirmación de pago |
| `validate-delivery-address` | Verificar que la dirección está en radio de 3km |
| `get-orders` | Obtener pedidos (para admin) |
| `update-order-status` | Actualizar estado del pedido |

---

## Fase 2: Integración con Stripe

### 2.1 Flujo de Pago

```text
Cliente añade productos → Carrito → Checkout
                                      │
                                      ▼
                          Valida dirección (3km)
                                      │
                                      ▼
                          Valida horario (9:30-00:00)
                                      │
                                      ▼
                          Crea Payment Intent (Stripe)
                                      │
                                      ▼
                          Formulario de pago seguro
                                      │
                                      ▼
                          Webhook confirma pago
                                      │
                                      ▼
                          Email de confirmación
```

### 2.2 Componentes de Pago
- Formulario de checkout con Stripe Elements
- Validación de tarjeta en tiempo real
- Confirmación visual del pago

---

## Fase 3: Interfaz de Usuario

### 3.1 Nueva Página de Delivery (`/delivery`)

```text
┌────────────────────────────────────────────────────────────────┐
│  NAVBAR                                        [🛒 Carrito (3)] │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  PIDE A DOMICILIO                                        │   │
│  │  Horario: 9:30 - 00:00 | Radio: 3km desde Montero Ríos   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  [BRUNCH] [BURGER]                                              │
│                                                                 │
│  [Tostadas] [Bollería] [Bowls] [Dulces]                        │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │  IMAGEN  │  │  IMAGEN  │  │  IMAGEN  │  │  IMAGEN  │       │
│  │  Nombre  │  │  Nombre  │  │  Nombre  │  │  Nombre  │       │
│  │  8,90€   │  │  7,90€   │  │  4,50€   │  │  5,90€   │       │
│  │ [AÑADIR] │  │ [AÑADIR] │  │ [AÑADIR] │  │ [AÑADIR] │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### 3.2 Carrito Lateral (Drawer)

```text
┌──────────────────────────────────────┐
│  TU PEDIDO                      [X]  │
├──────────────────────────────────────┤
│                                      │
│  TRUFADA               x2    25,80€  │
│  [-] [+]        [Quitar]             │
│                                      │
│  LA BIANCA             x1     7,90€  │
│  [-] [+]        [Quitar]             │
│                                      │
├──────────────────────────────────────┤
│  Subtotal                    33,70€  │
│  Gastos de envío              2,50€  │
│  ─────────────────────────────────── │
│  TOTAL                       36,20€  │
├──────────────────────────────────────┤
│                                      │
│       [CONTINUAR CON EL PEDIDO]      │
│                                      │
└──────────────────────────────────────┘
```

### 3.3 Página de Checkout (`/checkout`)

```text
┌────────────────────────────────────────────────────────────────┐
│                        FINALIZAR PEDIDO                         │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────┐  ┌─────────────────────────────┐  │
│  │  DATOS DE ENTREGA       │  │  RESUMEN DEL PEDIDO          │  │
│  │                         │  │                               │  │
│  │  Nombre*                │  │  TRUFADA x2          25,80€  │  │
│  │  [________________]     │  │  LA BIANCA x1         7,90€  │  │
│  │                         │  │  ───────────────────────────  │  │
│  │  Email*                 │  │  Subtotal            33,70€  │  │
│  │  [________________]     │  │  Envío                2,50€  │  │
│  │                         │  │  ───────────────────────────  │  │
│  │  Teléfono*              │  │  TOTAL              36,20€   │  │
│  │  [________________]     │  │                               │  │
│  │                         │  └─────────────────────────────┘  │
│  │  Dirección*             │                                   │
│  │  [________________]     │  ┌─────────────────────────────┐  │
│  │                         │  │  PAGO CON TARJETA           │  │
│  │  [Validar dirección]    │  │                             │  │
│  │  ✓ Dentro de zona       │  │  [Stripe Elements Form]     │  │
│  │                         │  │                             │  │
│  │  Notas para el reparto  │  │  [PAGAR 36,20€]             │  │
│  │  [________________]     │  │                             │  │
│  │                         │  └─────────────────────────────┘  │
│  └─────────────────────────┘                                   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### 3.4 Página de Confirmación (`/order-confirmation`)

Muestra el resumen del pedido, tiempo estimado de entrega y datos de contacto.

---

## Fase 4: Panel de Administración

### 4.1 Nueva Sección de Pedidos en Admin

```text
┌────────────────────────────────────────────────────────────────┐
│  PANEL DE PEDIDOS                                               │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Pendientes] [Preparando] [En camino] [Entregados]            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ #1234 | María García | 36,20€ | 10:45 | PENDIENTE       │   │
│  │ Trufada x2, La Bianca x1                                 │   │
│  │ C/ Gran Vía 45, 2ºB                                      │   │
│  │ [PREPARAR] [VER DETALLES]                                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ #1233 | Juan López | 28,50€ | 10:30 | PREPARANDO        │   │
│  │ Black Garlic x1, Patatas Big x1, Tarta Queso x1          │   │
│  │ Av. García Barbón 12, 1ºA                                │   │
│  │ [EN CAMINO] [VER DETALLES]                               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### 4.2 Estados del Pedido

| Estado | Descripción |
|--------|-------------|
| `pending` | Pedido recibido, pendiente de preparar |
| `preparing` | En cocina |
| `out_for_delivery` | Repartidor en camino |
| `delivered` | Entregado |
| `cancelled` | Cancelado |

---

## Fase 5: Validaciones y Reglas de Negocio

### 5.1 Validación de Zona de Entrega

- Centro: Montero Ríos 18, Vigo (42.2372, -8.7168)
- Radio máximo: 3km
- Cálculo mediante fórmula Haversine
- Se mostrará un mapa con la zona de cobertura

### 5.2 Validación de Horario

```text
Horario de pedidos: 9:30 - 00:00

Si está CERRADO:
- Se muestra mensaje "Abrimos a las 9:30"
- Botón de añadir deshabilitado
- Banner informativo en la página

Si está ABIERTO:
- Funcionamiento normal
- Tiempo estimado de entrega: 30-45 min
```

### 5.3 Pedido Mínimo

- Pedido mínimo sugerido: 12€ (configurable)
- Gastos de envío: 2,50€

---

## Fase 6: Emails Transaccionales

| Email | Destinatario | Cuándo |
|-------|--------------|--------|
| Confirmación de pedido | Cliente | Al completar pago |
| Nuevo pedido | Admin (info@sorrybut.es) | Al completar pago |
| Pedido en camino | Cliente | Cambio de estado |

---

## Fase 7: Autenticación de Clientes (Opcional)

Para clientes con cuenta (registro opcional):
- Guardar direcciones de entrega favoritas
- Ver historial de pedidos
- Repetir pedidos anteriores

Para pedidos como invitado:
- Solo necesitan email, teléfono y dirección
- Sin historial guardado

---

## Detalles Técnicos

### Tecnologías a Usar

| Componente | Tecnología |
|------------|------------|
| Pagos | Stripe (Checkout + Webhooks) |
| Base de datos | Supabase (PostgreSQL) |
| Backend | Supabase Edge Functions |
| Frontend | React + Framer Motion |
| Emails | Resend (ya configurado) |
| Geocodificación | API de Google Maps o similar |

### Nuevos Archivos a Crear

```text
src/
├── pages/
│   ├── Delivery.tsx          # Página principal de pedidos
│   ├── Checkout.tsx          # Formulario de checkout
│   └── OrderConfirmation.tsx # Confirmación de pedido
├── components/
│   ├── cart/
│   │   ├── CartContext.tsx   # Estado global del carrito
│   │   ├── CartDrawer.tsx    # Panel lateral del carrito
│   │   └── CartItem.tsx      # Ítem individual
│   ├── delivery/
│   │   ├── ProductCard.tsx   # Tarjeta de producto
│   │   ├── DeliveryZone.tsx  # Mapa zona de entrega
│   │   └── HoursChecker.tsx  # Validador de horario
│   └── checkout/
│       ├── AddressForm.tsx   # Formulario de dirección
│       └── PaymentForm.tsx   # Formulario de Stripe
└── hooks/
    └── useCart.ts            # Hook para gestionar carrito

supabase/functions/
├── create-checkout/          # Crear sesión de pago
├── stripe-webhook/           # Webhook de Stripe
├── validate-delivery-address/ # Validar zona de entrega
└── update-order-status/      # Actualizar estado de pedido
```

### Modificaciones a Archivos Existentes

| Archivo | Cambio |
|---------|--------|
| `Navbar.tsx` | Añadir icono de carrito con contador |
| `App.tsx` | Añadir nuevas rutas + CartProvider |
| `Admin.tsx` | Añadir sección de pedidos |

---

## Próximos Pasos

1. **Habilitar Stripe** - Necesitarás tu clave secreta de Stripe
2. **Crear tablas** - Base de datos para productos y pedidos
3. **Implementar carrito** - Estado global y persistencia
4. **Página de delivery** - Catálogo con productos
5. **Checkout y pagos** - Integración con Stripe
6. **Panel admin** - Gestión de pedidos
7. **Emails** - Notificaciones automáticas
8. **Testing** - Probar flujo completo
