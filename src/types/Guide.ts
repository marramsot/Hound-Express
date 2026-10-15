export type EstadoGuia = "Pendiente" | "En tránsito" | "Entregado";

export interface HistoryEntry {
  fechaCambio: string;
  estadoAnterior: EstadoGuia;
  estadoNuevo: EstadoGuia;
}

export interface Guide {
  numeroGuia: number;
  origen: string;
  destino: string;
  destinatario: string;
  fecha: string;
  estado: EstadoGuia;
  historial: HistoryEntry[];
}