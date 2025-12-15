import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
          POLÍTICA DE COOKIES
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">1. ¿QUÉ SON LAS COOKIES?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas 
              un sitio web. Sirven para recordar tus preferencias, mejorar tu experiencia de navegación 
              y proporcionar información estadística sobre el uso del sitio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">2. RESPONSABLE DEL USO DE COOKIES</h2>
            <p>
              <strong>Razón Social:</strong> The Purple Cow Project S.L.<br />
              <strong>CIF:</strong> B19922350<br />
              <strong>Email:</strong> hola@sorrybut.es
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">3. TIPOS DE COOKIES QUE UTILIZAMOS</h2>
            
            <h3 className="font-display text-xl font-bold text-foreground mt-6">3.1 Cookies Técnicas (Necesarias)</h3>
            <p>Son esenciales para el funcionamiento del sitio web:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sesión:</strong> mantienen tu sesión activa mientras navegas</li>
              <li><strong>Carrito:</strong> recuerdan los productos añadidos al carrito</li>
              <li><strong>Seguridad:</strong> protegen contra ataques y fraudes</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-foreground mt-6">3.2 Cookies de Preferencias</h3>
            <p>Permiten recordar tus preferencias:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Idioma preferido</li>
              <li>Configuración de visualización</li>
              <li>Preferencias de cookies aceptadas</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-foreground mt-6">3.3 Cookies Analíticas</h3>
            <p>Nos ayudan a entender cómo los usuarios interactúan con el sitio:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> estadísticas de visitas, páginas vistas, duración de sesión</li>
              <li>Datos anónimos y agregados para mejorar el servicio</li>
            </ul>

            <h3 className="font-display text-xl font-bold text-foreground mt-6">3.4 Cookies de Marketing</h3>
            <p>Se utilizan para mostrar publicidad relevante:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remarketing en redes sociales</li>
              <li>Anuncios personalizados</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">4. DURACIÓN DE LAS COOKIES</h2>
            <table className="w-full border-collapse border border-muted">
              <thead>
                <tr className="bg-muted/20">
                  <th className="border border-muted p-3 text-left text-foreground">Tipo</th>
                  <th className="border border-muted p-3 text-left text-foreground">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-muted p-3">Cookies de sesión</td>
                  <td className="border border-muted p-3">Se eliminan al cerrar el navegador</td>
                </tr>
                <tr>
                  <td className="border border-muted p-3">Cookies persistentes</td>
                  <td className="border border-muted p-3">1 mes - 2 años según su finalidad</td>
                </tr>
                <tr>
                  <td className="border border-muted p-3">Cookies de terceros</td>
                  <td className="border border-muted p-3">Depende del proveedor (ver su política)</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">5. CÓMO GESTIONAR LAS COOKIES</h2>
            <p>Puedes gestionar o eliminar las cookies desde tu navegador:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
              <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
            </ul>
            <p className="mt-4">
              <strong>Nota:</strong> Si desactivas las cookies, algunas funcionalidades del sitio 
              podrían no funcionar correctamente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">6. COOKIES DE TERCEROS</h2>
            <p>Este sitio puede utilizar servicios de terceros que instalan sus propias cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de privacidad de Google</a></li>
              <li><strong>Instagram:</strong> <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de datos de Instagram</a></li>
              <li><strong>TikTok:</strong> <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de privacidad de TikTok</a></li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">7. ACTUALIZACIONES</h2>
            <p>
              Esta política de cookies puede actualizarse periódicamente. Te recomendamos revisarla 
              de vez en cuando para estar informado sobre cómo usamos las cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">8. CONTACTO</h2>
            <p>
              Si tienes dudas sobre nuestra política de cookies, contacta con nosotros en{" "}
              <strong>hola@sorrybut.es</strong>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
