export interface TareaAsignada
{
    Tarea: string;
}

export interface SoftwareAsignado
{
    desarrollos: TareaAsignada[];
    Fecha_Inicio: Date;
    Fecha_Termino: Date;
    Nombre: string;
    Descripcion: string;
    Estado: string;
}

export interface SoftwareAsignadoResponse
{
    mensaje: string;
    desarrollos: SoftwareAsignado[];
}
