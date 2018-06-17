import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EmpleadoForm} from './models/empleadoForm';
import {PerfilForm} from './models/perfilForm';
import {environment} from '../../environments/environment';
import {EmpleadoResponse} from './models/EmpleadoResponse';

@Component({
    selector : 'app-agregar-usuario',
    templateUrl : './agregar-usuario.component.html',
    styleUrls : ['./agregar-usuario.component.scss']
})
export class AgregarUsuarioComponent implements OnInit
{
    empleadoForm: EmpleadoForm = new EmpleadoForm();
    perfilForm: PerfilForm = new PerfilForm();
    
    constructor (private http: HttpClient)
    {
    }
    
    ngOnInit ()
    {
    }
    
    private agregarEmpleado ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.post<EmpleadoResponse>('http://' + environment.ip + ':5050/api/private/empleado',
            {
                token : localStorage.getItem('token'),
                Gdo_Estudios : this.empleadoForm.Gdo_Estudios,
                Nombre : this.empleadoForm.Nombre,
                Apellidos : this.empleadoForm.Apellidos,
                Estatus : 'Activo'
            },
            {headers : headers}).subscribe(data =>
        {
            this.agregarPerfil(data.nomina);
        }, error =>
        {
            console.log(error);
            alert('No se pudo crear usuario');
        });
    }
    
    private agregarPerfil (nomina: number)
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.post('http://' + environment.ip + ':5050/api/private/perfil',
            {
                token : localStorage.getItem('token'),
                Correo : this.perfilForm.Correo,
                Usuario : this.perfilForm.Usuario,
                Contrasena : this.perfilForm.Contrasena,
                Puesto : this.perfilForm.Puesto,
                Empleado : nomina
            },
            {headers : headers}).subscribe(data =>
        {
            alert('Se agrego exitosamente al empleado');
        }, error =>
        {
            alert('No se pudo crear usuario');
        });
    }
    
    agregarUsuario ()
    {
        this.agregarEmpleado();
    }
    
}
