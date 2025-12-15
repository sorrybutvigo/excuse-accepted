import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Marquee */}
      <div className="overflow-hidden py-6 border-b border-border">
        <div className="marquee whitespace-nowrap">
          <span className="text-display text-6xl md:text-8xl text-muted-foreground/20 inline-block">
            SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;
          </span>
          <span className="text-display text-6xl md:text-8xl text-muted-foreground/20 inline-block">
            SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;SORRYBUT&nbsp;·&nbsp;
          </span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-display text-3xl mb-4">SORRYBUT</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Burgers. Brunch. Merch. Sin excusas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/Sorrybut_sp/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@Sorrybut_sp0"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-display text-lg mb-4">NAVEGA</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-foreground transition-colors">
                  Menú
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/reservar" className="text-muted-foreground hover:text-foreground transition-colors">
                  Reservar
                </Link>
              </li>
              <li>
                <Link to="/excuses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Excuse Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-display text-lg mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Devoluciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-display text-lg mb-4">CONTACTO</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span className="text-sm">Avenida Montero Ríos nº 18, 36201 Vigo</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} />
                <span className="text-sm">986 40 76 45</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} />
                <span className="text-sm">hola@sorrybut.es</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SORRYBUT. Todos los derechos reservados. No hay excusas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
