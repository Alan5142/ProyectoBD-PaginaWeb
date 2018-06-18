import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PerfilResponse} from './models/perfil';
import {EmpleadoResponse} from './models/empleado';
import {SoftwareAsignado, SoftwareAsignadoResponse} from './models/softwareAsignados';
import {DatosPerfilForm} from './models/cambiarDatos';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginResponse} from '../login/login.component';


@Component({
    selector : 'app-perfil',
    templateUrl : './perfil.component.html',
    styleUrls : ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit
{
    usuario = '';
    correo = '';
    puesto = '';
    gdo_estudios = '';
    nombre = '';
    listaSoftware: SoftwareAsignado[];
    
    datosForm: DatosPerfilForm = new DatosPerfilForm();
    
    nuevaImagen: File;
    
    constructor (private http: HttpClient, private modalService: NgbModal)
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.get<PerfilResponse>('http://' + environment.ip + ':5050/api/private/perfil/' + localStorage.getItem('id'),
            {headers : headers}).subscribe(data =>
        {
            console.log(data);
            this.usuario = data.perfil.Usuario;
            this.correo = data.perfil.Correo;
            this.puesto = data.perfil.Puesto;
        }, error =>
        {
            console.log(error);
        });
        headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.get<EmpleadoResponse>('http://' + environment.ip + ':5050/api/private/empleado/' + localStorage.getItem('id'),
            {headers : headers}).subscribe(data =>
        {
            this.gdo_estudios = data.empleado.Gdo_Estudios;
            this.nombre = data.empleado.Nombre + ' ' + data.empleado.Apellidos;
        }, error =>
        {
            console.log(error);
        });
        
        headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.get<SoftwareAsignadoResponse>('http://' + environment.ip + ':5050/api/private/desarrollo/empleado/' + localStorage.getItem(
            'id'),
            {headers : headers}).subscribe(data =>
        {
            this.listaSoftware = data.desarrollos;
        }, error =>
        {
            console.log(error);
        });
    }
    
    ngOnInit ()
    {
    }
    
    cambiarDatos (content)
    {
        this.modalService.open(content).result.then((result) =>
        {
        }, (reason) =>
        {
            switch (reason)
            {
                case 'Si':
                    const headers = new HttpHeaders().set('Content-Type', 'application/json');
                    this.http.put('http://' + environment.ip + ':5050/api/private/perfil/' + localStorage.getItem(
                        'id'),
                        {token : localStorage.getItem('token'), Contrasena : this.datosForm.Contrasena},
                        {headers : headers}).subscribe(data =>
                    {
                        this.pedirToken(this.datosForm.Contrasena);
                        alert('Exito al cambiar tus datos');
                    }, error =>
                    {
                        console.log(error);
                        alert('Error al cambiar tus datos');
                    });
                    break;
                case 'No':
                    break;
            }
        });
    }
    
    pedirToken (contrasena: string)
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.post<LoginResponse>('http://' + environment.ip + ':5050/api/auth/login',
            {user : localStorage.getItem('nombre'), password : contrasena},
            {headers : headers}).subscribe(data =>
        {
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('id', data.numUsuario + '');
        }, error =>
        {
        });
    }
    
    subirImagen ()
    {
        const formData: FormData = new FormData();
        console.log(this.nuevaImagen);
        formData.append('foto', this.nuevaImagen, this.nuevaImagen.name);
        console.log(formData);
        this.http.post('http://' + environment.ip + ':5050/api/private/fotos/' + localStorage.getItem(
            'id') + '?token=' + localStorage.getItem('token') + '&perfil=true',
            formData).subscribe(data =>
        {
            alert('subida con exito, recarga para ver los cambios');
        }, error =>
        {
            console.log(error);
        });
    }
    
    onImageChange (event)
    {
        console.log(event);
        this.nuevaImagen = event.target.files[0];
    }
}
