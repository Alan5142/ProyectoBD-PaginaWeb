export interface Proyecto
{
    Nombre: string;
    Estado: string;
    Fecha_Termino: Date;
    Fecha_Ten_Termino: Date;
    Motivo: string;
}
// Esto de aca abajo ya esta?
export interface CSResponse
{
    mensaje: string;
    cancelados_o_tarde: Proyecto[];
}
