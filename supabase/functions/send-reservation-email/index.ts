import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ReservationRequest {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  mode: string;
  notes: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const reservation: ReservationRequest = await req.json();
    
    console.log("Received reservation request:", reservation);

    const modeLabel = reservation.mode === "brunch" ? "Brunch" : "Burger";
    
    // Send email to info@sorrybut.es
    const adminEmailResponse = await resend.emails.send({
      from: "Sorry But <onboarding@resend.dev>",
      to: ["info@sorrybut.es"],
      subject: `Nueva Reserva - ${reservation.name} - ${modeLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
            🍔 Nueva Reserva en Sorry But
          </h1>
          
          <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #8B5CF6; margin-top: 0;">Detalles de la Reserva</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Modo:</td>
                <td style="padding: 8px 0; color: #333;">${modeLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Nombre:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Teléfono:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Fecha:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.date}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Hora:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.time}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Personas:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.guests}</td>
              </tr>
              ${reservation.notes ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Notas:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.notes}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Este email fue enviado automáticamente desde el formulario de reservas de sorrybut.es
          </p>
        </div>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Sorry But <onboarding@resend.dev>",
      to: [reservation.email],
      subject: `¡Reserva Confirmada! - Sorry But`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
            🍔 ¡Gracias por tu reserva, ${reservation.name}!
          </h1>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Hemos recibido tu reserva correctamente. Aquí tienes los detalles:
          </p>
          
          <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #8B5CF6; margin-top: 0;">Detalles de tu Reserva</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Experiencia:</td>
                <td style="padding: 8px 0; color: #333;">${modeLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Fecha:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.date}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Hora:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.time}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Personas:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.guests}</td>
              </tr>
              ${reservation.notes ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Notas:</td>
                <td style="padding: 8px 0; color: #333;">${reservation.notes}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            ¡Te esperamos! Si necesitas modificar o cancelar tu reserva, no dudes en contactarnos.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              <strong>Sorry But</strong><br>
              📍 Tu burger spot favorito<br>
              📧 info@sorrybut.es
            </p>
          </div>
        </div>
      `,
    });

    console.log("Customer email sent:", customerEmailResponse);

    return new Response(JSON.stringify({ success: true, adminEmailResponse, customerEmailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-reservation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
