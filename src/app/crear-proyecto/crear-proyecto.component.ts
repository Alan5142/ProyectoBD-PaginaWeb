import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SoftwareForm} from './models/softwareForm';
import {environment} from '../../environments/environment';

@Component({
    selector : 'app-crear-proyecto',
    templateUrl : './crear-proyecto.component.html',
    styleUrls : ['./crear-proyecto.component.scss']
})
export class CrearProyectoComponent implements OnInit
{
    softwareForm: SoftwareForm = new SoftwareForm();
    
    constructor (private http: HttpClient)
    {
    }
    
    ngOnInit ()
    {
    }
    
    crearProyecto ()
    {
        console.log(this.softwareForm);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.post('http://' + environment.ip + ':5050/api/private/software',
            {
                token : localStorage.getItem('token'),
                Nombre : this.softwareForm.Nombre,
                Descripcion : this.softwareForm.Descripcion,
                Estado : this.softwareForm.Estado,
                Fecha_Inicio : this.softwareForm.Fecha_Inicio,
                Fecha_Termino : this.softwareForm.Fecha_Termino
            },
            {headers : headers}).subscribe(data =>
        {
            alert('Se creo con exito el proyecto');
        }, error =>
        {
            console.log(error);
            alert('No se pudo crear el proyecto');
        });
    }
}
