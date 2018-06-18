export interface PerfilesPasadosModel
{
    Clave: number;
    Usuario: string;
    puesto: string;
    Nombre: string;
    Apellidos: string;
}

export interface PerfilesPasadosResponse
{
    mensaje: string;
    perfiles_pasados: PerfilesPasadosModel[];
}
