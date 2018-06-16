export interface Empleado
{
    Nomina: number;
    Gdo_Estudios: string;
    Nombre: string;
    Apellidos: string;
    Status: string;
}

export interface EmpleadoResponse
{
    mensaje: string;
    empleado: Empleado;
}
