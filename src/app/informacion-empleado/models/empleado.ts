export interface Empleado
{
    Nomina: number;
    Gdo_Estudios: string;
    Nombre: string;
    Apellidos: string;
    Estatus: string;
}

export interface EmpleadoResponse
{
    mensaje: string;
    empleados: Empleado[];
}
