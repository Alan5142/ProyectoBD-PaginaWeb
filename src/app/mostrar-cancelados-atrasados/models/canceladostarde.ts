export interface Proyecto
{
    Estado: string;
    Fecha_Ten_Termino: Date;
    Fecha_Termino: Date;
    Motivo: string;
    Nombre: string;
}

// Esto de aca abajo ya esta?
export interface CSResponse
{
    mensaje: string;
    cancelados_o_tarde: Proyecto[];
}
