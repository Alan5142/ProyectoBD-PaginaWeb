import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
    selector : 'app-perfil-detalles',
    templateUrl : './perfil-detalles.component.html',
    styleUrls : ['./perfil-detalles.component.scss']
})
export class PerfilDetallesComponent implements OnInit
{
    @Input()
    public idEmpleado: number;
    
    @Input()
    public nombre: string;
    
    @Input()
    public correo: string;
    
    @Input()
    public usuario: string;
    
    @Input()
    public contrasena: string;
    
    @Input()
    public puesto: string;
    
    constructor (private http: HttpClient)
    {
    }
    
    ngOnInit ()
    {
    }
    
    editar ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.put('http://' + environment.ip + ':5050/api/private/perfil/' + this.idEmpleado,
            {
                Nombre : this.usuario,
                Contrasena : this.contrasena,
                Puesto : this.puesto,
                Correo : this.correo
            }, {headers : headers}).subscribe(data =>
        {
            alert('Se edito con exito');
            
        }, error =>
        {
            console.log(error);
            alert('No se pudo editar' + this.usuario);
        });
    }
    
    eliminar ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.delete('http://' + environment.ip + ':5050/api/private/perfil/' + this.idEmpleado, {headers : headers}).subscribe(data =>
        {
            alert('Se elimino con exito, entra de nuevo a esta pestaña para ver los cambios');
            
        }, error =>
        {
            console.log(error);
            alert('No se pudo eliminar' + this.usuario);
        });
    }
}
