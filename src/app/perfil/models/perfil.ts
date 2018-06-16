export interface Perfil
{
    Clave_Empleado: string;
    Usuario: string;
    Correo: string;
    Puesto: string;
}

export interface PerfilResponse
{
    mensaje: string;
    perfil: Perfil;
}
