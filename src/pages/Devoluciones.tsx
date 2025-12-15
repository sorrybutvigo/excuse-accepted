import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Devoluciones = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
          POLÍTICA DE DEVOLUCIONES
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">1. DERECHO DE DESISTIMIENTO</h2>
            <p>
              De acuerdo con la legislación vigente, dispones de un plazo de <strong>14 días naturales</strong> 
              desde la recepción del producto para ejercer tu derecho de desistimiento sin necesidad de 
              justificación.
            </p>
            <p>
              Para ejercer este derecho, debes comunicarlo a:
            </p>
            <p>
              <strong>The Purple Cow Project S.L.</strong><br />
              Avenida Montero Ríos nº 18, 36201 Vigo (Pontevedra)<br />
              Email: hola@sorrybut.es<br />
              Teléfono: 986 40 76 45
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">2. CONDICIONES DE DEVOLUCIÓN</h2>
            <p>Para que la devolución sea aceptada, el producto debe:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Estar en su estado original, sin usar y con todas las etiquetas</li>
              <li>Incluir el embalaje original en buen estado</li>
              <li>Estar acompañado del ticket o comprobante de compra</li>
              <li>No presentar signos de uso, lavado o deterioro</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">3. PRODUCTOS EXCLUIDOS</h2>
            <p>No se admiten devoluciones de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Productos personalizados o hechos a medida</li>
              <li>Artículos de higiene que hayan sido desprecintados</li>
              <li>Productos alimentarios o perecederos</li>
              <li>Productos que por razones de higiene no puedan ser devueltos una vez usados</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">4. PROCESO DE DEVOLUCIÓN</h2>
            <p>Pasos para realizar una devolución:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contacta con nosotros en <strong>hola@sorrybut.es</strong> indicando tu número de pedido</li>
              <li>Te enviaremos un formulario de devolución y las instrucciones de envío</li>
              <li>Empaqueta el producto de forma segura con todos sus elementos originales</li>
              <li>Envía el paquete a la dirección indicada</li>
              <li>Una vez recibido y verificado, procesaremos el reembolso</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">5. GASTOS DE DEVOLUCIÓN</h2>
            <p>
              <strong>Devolución por desistimiento:</strong> Los gastos de envío de devolución corren 
              a cargo del cliente.
            </p>
            <p>
              <strong>Producto defectuoso o error nuestro:</strong> Nos haremos cargo de todos los 
              gastos de envío y te proporcionaremos una etiqueta de devolución prepagada.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">6. REEMBOLSO</h2>
            <p>
              Una vez recibido el producto y verificado su estado, realizaremos el reembolso en un 
              plazo máximo de <strong>14 días</strong> utilizando el mismo método de pago que usaste 
              para la compra original.
            </p>
            <p>El reembolso incluirá:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El precio del producto</li>
              <li>Los gastos de envío iniciales (solo si devuelves todos los productos del pedido)</li>
            </ul>
            <p className="mt-4">
              <strong>Nota:</strong> El plazo de reembolso puede variar según tu entidad bancaria 
              (generalmente 5-10 días laborables adicionales).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">7. CAMBIOS</h2>
            <p>
              Si deseas cambiar un producto por otra talla o modelo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contacta con nosotros en <strong>hola@sorrybut.es</strong></li>
              <li>Te indicaremos la disponibilidad del producto deseado</li>
              <li>Los gastos de envío del cambio corren a cargo del cliente, salvo error nuestro</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">8. PRODUCTOS DEFECTUOSOS</h2>
            <p>
              Si recibes un producto defectuoso o dañado:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contacta con nosotros en las primeras <strong>48 horas</strong> desde la recepción</li>
              <li>Incluye fotos del defecto y del embalaje</li>
              <li>Te enviaremos un nuevo producto o realizaremos el reembolso completo</li>
              <li>Todos los gastos corren de nuestra cuenta</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">9. GARANTÍA</h2>
            <p>
              Todos nuestros productos tienen una garantía de <strong>2 años</strong> conforme a la 
              legislación española. Esta garantía cubre defectos de fabricación, no el desgaste 
              normal por uso.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">10. CONTACTO</h2>
            <p>
              Para cualquier consulta sobre devoluciones, contacta con nosotros:
            </p>
            <p>
              <strong>Email:</strong> hola@sorrybut.es<br />
              <strong>Teléfono:</strong> 986 40 76 45<br />
              <strong>Horario:</strong> Lunes a Viernes, 10:00 - 18:00
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Devoluciones;
