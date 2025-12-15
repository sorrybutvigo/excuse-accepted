import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
          POLÍTICA DE PRIVACIDAD
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">1. RESPONSABLE DEL TRATAMIENTO</h2>
            <p>
              <strong>Razón Social:</strong> The Purple Cow Project S.L.<br />
              <strong>CIF:</strong> B19922350<br />
              <strong>Domicilio:</strong> Avenida Montero Ríos nº 18, 36201 Vigo (Pontevedra), España<br />
              <strong>Teléfono:</strong> 986 40 76 45<br />
              <strong>Email:</strong> hola@sorrybut.es
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">2. DATOS QUE RECOPILAMOS</h2>
            <p>Podemos recopilar los siguientes tipos de datos personales:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos de identificación: nombre, apellidos, email, teléfono</li>
              <li>Datos de reservas: fecha, hora, número de comensales</li>
              <li>Datos de compras: dirección de envío, historial de pedidos</li>
              <li>Datos de navegación: cookies, dirección IP, tipo de dispositivo</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">3. FINALIDAD DEL TRATAMIENTO</h2>
            <p>Tratamos tus datos con las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar reservas de mesa en nuestro restaurante</li>
              <li>Procesar pedidos de la tienda online</li>
              <li>Enviar comunicaciones comerciales (solo con tu consentimiento)</li>
              <li>Mejorar nuestros servicios y experiencia de usuario</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">4. LEGITIMACIÓN</h2>
            <p>La base legal para el tratamiento de tus datos es:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ejecución de un contrato (reservas y compras)</li>
              <li>Consentimiento del interesado (comunicaciones comerciales)</li>
              <li>Interés legítimo (mejora de servicios)</li>
              <li>Cumplimiento de obligaciones legales</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">5. DESTINATARIOS</h2>
            <p>
              Tus datos podrán ser comunicados a terceros solo cuando sea necesario para la prestación del servicio 
              (empresas de transporte, pasarelas de pago) o por obligación legal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">6. CONSERVACIÓN DE DATOS</h2>
            <p>
              Conservaremos tus datos mientras exista una relación contractual y posteriormente durante los plazos 
              legalmente establecidos para atender posibles responsabilidades.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">7. TUS DERECHOS</h2>
            <p>Puedes ejercer los siguientes derechos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
              <li><strong>Limitación:</strong> solicitar la limitación del tratamiento</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato electrónico</li>
            </ul>
            <p>
              Para ejercer estos derechos, contacta con nosotros en <strong>hola@sorrybut.es</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">8. RECLAMACIONES</h2>
            <p>
              Si consideras que el tratamiento de tus datos no es adecuado, puedes presentar una reclamación ante la 
              Agencia Española de Protección de Datos (www.aepd.es).
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidad;
