import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
    selector : 'app-editar-empleado',
    templateUrl : './editar-empleado.component.html',
    styleUrls : ['./editar-empleado.component.scss']
})
export class EditarEmpleadoComponent implements OnInit
{
    nomina: number;
    estatus: string;
    grado: string;
    
    constructor (private http: HttpClient)
    {
    }
    
    ngOnInit ()
    {
    }
    
    actualizarEmpleado ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.put('http://' + environment.ip + ':5050/api/private/empleado/' + this.nomina,
            {
                Estatus : this.estatus,
                Gdo_Estudios : this.grado
            }, {headers : headers}).subscribe(data =>
        {
            alert('Se editaron con exito los registros del empleado');
            
        }, error =>
        {
            alert('No se pudo registrar los cambios');
        });
    }
}
