import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Empleado, EmpleadoResponse} from './models/empleado';

@Component({
    selector : 'app-informacion-empleado',
    templateUrl : './informacion-empleado.component.html',
    styleUrls : ['./informacion-empleado.component.scss']
})
export class InformacionEmpleadoComponent implements OnInit
{
    listaEmpleadosTotal: Empleado[];
    listaEmpleadosAMostrar: Empleado[];
    nombreEmpleado: string;
    
    constructor (private http: HttpClient)
    {
    }
    
    fetchProjects ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.get<EmpleadoResponse>('http://' + environment.ip + ':5050/api/private/empleado', {headers : headers}).subscribe(data =>
        {
            this.listaEmpleadosTotal = data.empleados;
            this.listaEmpleadosAMostrar = this.listaEmpleadosTotal.slice(0);
        }, error =>
        {
            console.log(error);
            alert('No se pudo obtener información de las tablas');
        });
    }
    
    ngOnInit ()
    {
        this.fetchProjects();
    }
    
    filtrar ()
    {
        if (this.nombreEmpleado === '')
        {
            this.listaEmpleadosAMostrar = this.listaEmpleadosTotal;
            return;
        }
        this.listaEmpleadosAMostrar = this.listaEmpleadosTotal.filter((empleado, index, array) =>
        {
            return empleado.Nombre.indexOf(this.nombreEmpleado) >= 0;
        });
    }
}
