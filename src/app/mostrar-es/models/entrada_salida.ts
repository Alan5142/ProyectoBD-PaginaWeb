export interface EntradaSalidaModel
{
    Tipo: string;
    Registro: Date;
    Perfil: number;
}

export interface EntradaSalidaResponse
{
    mensaje: string;
    entradas_salidas: EntradaSalidaModel[];
}