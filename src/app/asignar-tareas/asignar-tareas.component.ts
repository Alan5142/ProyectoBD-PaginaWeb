import {Component, OnInit} from '@angular/core';
import {TareaForm} from './models/tareaForm';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EmpleadoResponse} from '../agregar-usuario/models/EmpleadoResponse';
import {environment} from '../../environments/environment';

@Component({
    selector : 'app-asignar-tareas',
    templateUrl : './asignar-tareas.component.html',
    styleUrls : ['./asignar-tareas.component.scss']
})
export class AsignarTareasComponent implements OnInit
{
    tareaForm = new TareaForm();
    
    constructor (private http: HttpClient)
    {
    }
    
    ngOnInit ()
    {
    }
    
    asignarTarea ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.post<EmpleadoResponse>('http://' + environment.ip + ':5050/api/private/desarrollo',
            {
                token : localStorage.getItem('token'),
                desarrollo : this.tareaForm
                /*
                 tarea : this.tareaForm.tarea,
                 fechaInicio : this.tareaForm.fechaInicio,
                 fechaTermino : this.tareaForm.fechaTermino,
                 software : this.tareaForm.software,
                 empleado : this.tareaForm.noEmpleado*/
            },
            {headers : headers}).subscribe(data =>
        {
            alert('Exito al crear la tarea');
        }, error =>
        {
            alert('No se pudo crear tarea');
        });
    }
}
