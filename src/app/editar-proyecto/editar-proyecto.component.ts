import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ProyectoIncidenciaForm} from './models/proyectoIncidenciaForm';

@Component({
    selector : 'app-editar-proyecto',
    templateUrl : './editar-proyecto.component.html',
    styleUrls : ['./editar-proyecto.component.scss']
})

export class EditarProyectoComponent implements OnInit
{
    noProyectoFinalizar: number;
    proyectoIncidenciaForm: ProyectoIncidenciaForm = new ProyectoIncidenciaForm();
    
    constructor (private http: HttpClient)
    {
    }
    
    ngOnInit ()
    {
    }
    
    finalizarProyecto ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.put('http://' + environment.ip + ':5050/api/private/software/' + this.noProyectoFinalizar,
            {
                token : localStorage.getItem('token'),
                Estado : 'Terminado'
                
            }, {headers : headers})
            .subscribe(data =>
            {
                alert('Editado con exito');
            }, error =>
            {
                console.log(error);
                alert('No se pudo editar el proyecto');
            });
    }
    
    retrasarOCancelarProyecto ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.put('http://' + environment.ip + ':5050/api/private/software/' + this.proyectoIncidenciaForm.NoProyecto,
            {
                token : localStorage.getItem('token'),
                Estado : this.proyectoIncidenciaForm.Estado,
                Fecha_Termino : this.proyectoIncidenciaForm.FechaTermino
            }, {headers : headers})
            .subscribe(data =>
                {
                    console.log(':D');
                    this.ponerRazon();
                }, error =>
                {
                    console.log(error);
                    alert('Error al editar');
                }
            );
        
    }
    
    private ponerRazon ()
    {
        console.log('se edita para poner razón');
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.put('http://' + environment.ip + ':5050/api/private/cancelados_tarde/' + this.proyectoIncidenciaForm.NoProyecto,
            {
                token : localStorage.getItem('token'),
                razon : this.proyectoIncidenciaForm.Razon,
                fechaTermino : this.proyectoIncidenciaForm.FechaTermino,
                Estado : this.proyectoIncidenciaForm.Estado
                
            }, {headers : headers})
            .subscribe(data =>
            {
                alert('Editado con exito');
            }, error =>
            {
                console.log(error);
                alert('No se pudo editar el proyecto');
            });
    }
}
