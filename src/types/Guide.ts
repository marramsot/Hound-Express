export interface HistoryEntry {
  fechaCambio: string
  estadoAnterior: string
  estadoNuevo: string
}
export interface Guide {
    numeroGuia: number
    origen: string
    destino: string
    destinatario: string
    fecha: string
    estado: string
    historial: HistoryEntry[]
}