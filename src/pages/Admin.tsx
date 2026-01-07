import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Clock, Users, Phone, Mail, MessageSquare, Check, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  mode: string;
  notes: string | null;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterMode, setFilterMode] = useState<string>("all");

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-reservations', {
        body: { status: filterStatus, mode: filterMode }
      });

      if (error) throw error;
      setReservations(data.reservations || []);
    } catch (error: any) {
      console.error("Error fetching reservations:", error);
      toast({
        title: "Error",
        description: "No se pudieron cargar las reservas",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, [filterStatus, filterMode]);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase.functions.invoke('update-reservation-status', {
        body: { id, status: newStatus }
      });

      if (error) throw error;

      setReservations(prev =>
        prev.map(r => (r.id === id ? { ...r, status: newStatus } : r))
      );

      toast({
        title: "Estado actualizado",
        description: `La reserva ha sido marcada como ${newStatus === 'confirmed' ? 'confirmada' : 'cancelada'}`,
      });
    } catch (error: any) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "No se pudo actualizar el estado",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500 hover:bg-green-600">Confirmada</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelada</Badge>;
      default:
        return <Badge variant="secondary">Pendiente</Badge>;
    }
  };

  const getModeBadge = (mode: string) => {
    return mode === "brunch" ? (
      <Badge className="bg-orange-500 hover:bg-orange-600">Brunch</Badge>
    ) : (
      <Badge className="bg-purple-500 hover:bg-purple-600">Burger</Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4 md:mb-0">
              Panel de Reservas
            </h1>
            
            <div className="flex flex-wrap gap-4">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="pending">Pendientes</SelectItem>
                  <SelectItem value="confirmed">Confirmadas</SelectItem>
                  <SelectItem value="cancelled">Canceladas</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterMode} onValueChange={setFilterMode}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Modo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="brunch">Brunch</SelectItem>
                  <SelectItem value="burger">Burger</SelectItem>
                </SelectContent>
              </Select>

              <Button onClick={fetchReservations} variant="outline">
                Actualizar
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : reservations.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No hay reservas que mostrar
            </div>
          ) : (
            <div className="rounded-lg border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Estado</TableHead>
                      <TableHead>Modo</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Contacto</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Hora</TableHead>
                      <TableHead>Personas</TableHead>
                      <TableHead>Notas</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reservations.map((reservation) => (
                      <TableRow key={reservation.id}>
                        <TableCell>{getStatusBadge(reservation.status)}</TableCell>
                        <TableCell>{getModeBadge(reservation.mode)}</TableCell>
                        <TableCell className="font-medium">{reservation.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-sm">
                            <span className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {reservation.email}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {reservation.phone}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(reservation.date), "d MMM yyyy", { locale: es })}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {reservation.time}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {reservation.guests}
                          </span>
                        </TableCell>
                        <TableCell>
                          {reservation.notes && (
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MessageSquare className="w-3 h-3" />
                              {reservation.notes}
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {reservation.status !== "confirmed" && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 hover:text-green-700"
                                onClick={() => updateStatus(reservation.id, "confirmed")}
                              >
                                <Check className="w-4 h-4" />
                              </Button>
                            )}
                            {reservation.status !== "cancelled" && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 hover:text-red-700"
                                onClick={() => updateStatus(reservation.id, "cancelled")}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;