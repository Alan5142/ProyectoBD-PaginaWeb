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
    
    puesto: string;
    
    constructor (private http: HttpClient)
    {
        this.obtenerPuesto();
    }
    
    obtenerPuesto ()
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
        const putData = (fecha: Date) =>
        {
            console.log(fecha);
            this.http.put('http://' + environment.ip + ':5050/api/private/software/' + this.proyectoIncidenciaForm.NoProyecto,
                {
                    token : localStorage.getItem('token'),
                    Estado : this.proyectoIncidenciaForm.Estado,
                    Fecha_Termino : this.proyectoIncidenciaForm.FechaTermino
                }, {headers : headers})
                .subscribe(data =>
                    {
                        this.ponerRazon(fecha);
                    }, error =>
                    {
                        console.log(error);
                        alert('Error al editar');
                    }
                );
        };
        const headersSearch = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.get('http://' + environment.ip + ':5050/api/software/info/' + this.proyectoIncidenciaForm.NoProyecto,
            {headers : headersSearch})
            .subscribe(data =>
                {
                    console.log(data);
                    putData((data as any).software.Fecha_Termino);
                }, error =>
                {
                    console.log(error);
                    alert('Error al editar');
                }
            );
        
    }
    
    private ponerRazon (fecha: Date)
    {
        console.log(fecha);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.put('http://' + environment.ip + ':5050/api/private/cancelados_tarde/' + this.proyectoIncidenciaForm.NoProyecto,
            {
                token : localStorage.getItem('token'),
                razon : this.proyectoIncidenciaForm.Razon,
                fechaTermino : fecha,
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
