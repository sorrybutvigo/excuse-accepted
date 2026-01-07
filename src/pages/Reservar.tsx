import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, Users, ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
const Reservar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    mode: "burger",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-reservation-email', {
        body: formData,
      });

      if (error) {
        console.error('Error sending reservation:', error);
        toast.error("Error al enviar la reserva. Por favor, inténtalo de nuevo.");
        return;
      }

      console.log('Reservation sent successfully:', data);
      setIsSubmitted(true);
      toast.success("Reserva enviada correctamente");
    } catch (error) {
      console.error('Error:', error);
      toast.error("Error al enviar la reserva. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 md:pt-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <Check size={40} className="text-primary-foreground" />
              </div>
              <h1 className="text-display text-4xl md:text-6xl mb-4">
                RESERVA <span className="text-primary">CONFIRMADA</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Te esperamos el {formData.date} a las {formData.time} para {formData.guests} personas.
                Te hemos enviado un email de confirmación a {formData.email}.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-outline-neon px-6 py-3"
              >
                HACER OTRA RESERVA
              </button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-display text-5xl md:text-7xl lg:text-8xl mb-4">
                RESERVA <span className="text-primary glow-text-purple">MESA</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                No necesitas excusa para venir, pero sí una reserva.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto"
            >
              <div className="space-y-6">
                {/* Mode Selection */}
                <div>
                  <label className="text-display text-sm mb-3 block">¿QUÉ MODO?</label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, mode: "brunch" }))}
                      className={`flex-1 py-4 text-display transition-all ${
                        formData.mode === "brunch"
                          ? "btn-neon-orange"
                          : "bg-transparent border-2 border-muted text-muted-foreground hover:border-secondary"
                      }`}
                    >
                      BRUNCH
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, mode: "burger" }))}
                      className={`flex-1 py-4 text-display transition-all ${
                        formData.mode === "burger"
                          ? "btn-neon-purple"
                          : "bg-transparent border-2 border-muted text-muted-foreground hover:border-primary"
                      }`}
                    >
                      BURGER
                    </button>
                  </div>
                </div>

                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-display text-sm mb-2 block">NOMBRE</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border-2 border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-display text-sm mb-2 block">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border-2 border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-display text-sm mb-2 block">TELÉFONO</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-card border-2 border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-display text-sm mb-2 block flex items-center gap-2">
                      <Calendar size={16} /> FECHA
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border-2 border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-display text-sm mb-2 block flex items-center gap-2">
                      <Clock size={16} /> HORA
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border-2 border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Seleccionar</option>
                      {formData.mode === "brunch" ? (
                        <>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                        </>
                      ) : (
                        <>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                          <option value="22:00">22:00</option>
                          <option value="23:00">23:00</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="text-display text-sm mb-2 block flex items-center gap-2">
                      <Users size={16} /> PERSONAS
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-card border-2 border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-display text-sm mb-2 block">NOTAS (OPCIONAL)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-card border-2 border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Alergias, ocasión especial, preferencias..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full btn-neon-purple py-4 text-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      CONFIRMAR RESERVA
                      <ArrowRight size={20} />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reservar;
