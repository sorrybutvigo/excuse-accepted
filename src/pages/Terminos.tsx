import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terminos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
          TÉRMINOS Y CONDICIONES
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">1. INFORMACIÓN GENERAL</h2>
            <p>
              El presente aviso legal regula el uso del sitio web sorrybut.es, propiedad de:
            </p>
            <p>
              <strong>Razón Social:</strong> The Purple Cow Project S.L.<br />
              <strong>CIF:</strong> B19922350<br />
              <strong>Domicilio:</strong> Avenida Montero Ríos nº 18, 36201 Vigo (Pontevedra), España<br />
              <strong>Email:</strong> hola@sorrybut.es
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">2. CONDICIONES DE USO</h2>
            <p>
              El acceso y uso de este sitio web implica la aceptación de estos términos y condiciones. 
              El usuario se compromete a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar el sitio web de forma lícita y de buena fe</li>
              <li>No realizar actividades que puedan dañar los sistemas del sitio</li>
              <li>No suplantar la identidad de otros usuarios</li>
              <li>Proporcionar información veraz en formularios y registros</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">3. PROPIEDAD INTELECTUAL</h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, logotipos, diseños, código fuente) 
              son propiedad de The Purple Cow Project S.L. o de sus licenciantes, y están protegidos 
              por las leyes de propiedad intelectual.
            </p>
            <p>
              Queda prohibida la reproducción, distribución, transformación o comunicación pública 
              de los contenidos sin autorización expresa.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">4. RESERVAS</h2>
            <p>Las reservas realizadas a través de nuestra web están sujetas a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disponibilidad de mesas en la fecha y hora solicitadas</li>
              <li>Confirmación por parte del restaurante</li>
              <li>Política de cancelación: las cancelaciones deben realizarse con al menos 2 horas de antelación</li>
              <li>Tiempo de cortesía: mantenemos la reserva durante 15 minutos desde la hora reservada</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">5. TIENDA ONLINE</h2>
            <p>
              La compra de productos en nuestra tienda online implica la aceptación de las siguientes condiciones:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los precios mostrados incluyen IVA</li>
              <li>Los gastos de envío se calcularán antes de finalizar la compra</li>
              <li>El plazo de entrega estimado es de 3-7 días laborables</li>
              <li>Los productos están sujetos a disponibilidad</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">6. MÉTODOS DE PAGO</h2>
            <p>Aceptamos los siguientes métodos de pago:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tarjeta de crédito/débito (Visa, Mastercard)</li>
              <li>PayPal</li>
              <li>Transferencia bancaria</li>
            </ul>
            <p>
              Todos los pagos se procesan de forma segura a través de pasarelas de pago certificadas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">7. LIMITACIÓN DE RESPONSABILIDAD</h2>
            <p>
              The Purple Cow Project S.L. no se hace responsable de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Errores u omisiones en los contenidos del sitio</li>
              <li>Interrupciones del servicio por causas técnicas o de fuerza mayor</li>
              <li>Daños derivados del uso de la información del sitio</li>
              <li>Contenidos de sitios web de terceros enlazados</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">8. LEGISLACIÓN APLICABLE</h2>
            <p>
              Estos términos y condiciones se rigen por la legislación española. Para cualquier controversia, 
              las partes se someten a los juzgados y tribunales de Vigo (Pontevedra).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">9. CONTACTO</h2>
            <p>
              Para cualquier consulta sobre estos términos, puedes contactar con nosotros en{" "}
              <strong>hola@sorrybut.es</strong> o llamando al <strong>986 40 76 45</strong>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terminos;
