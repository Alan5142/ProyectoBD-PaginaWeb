import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CSResponse, Proyecto} from './models/canceladostarde';

@Component({
    selector : 'app-mostrar-cancelados-atrasados',
    templateUrl : './mostrar-cancelados-atrasados.component.html',
    styleUrls : ['./mostrar-cancelados-atrasados.component.scss']
})
export class MostrarCanceladosAtrasadosComponent implements OnInit
{
    listaCT: Proyecto[];
    listaCTAMostrar: Proyecto[];
    nombre: string;
    
    constructor (private http: HttpClient)
    {
    }
    
    fetchProjects ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.get<CSResponse>('http://' + environment.ip + ':5050/api/private/cancelados_tarde', {headers : headers})
            .subscribe(data =>
            {
                console.log(data);
                this.listaCT = data.cancelados_o_tarde;
                console.log(this.listaCT);
                this.listaCTAMostrar = this.listaCT.slice(0);
            }, error =>
            {
                console.log(error);
                alert('No se pudo obtener la información');
            });
    }
    
    ngOnInit ()
    {
        this.fetchProjects();
    }
    
    filtrar ()
    {
        if (this.nombre === '')
        {
            this.listaCTAMostrar = this.listaCT;
            return;
        }
        this.listaCTAMostrar = this.listaCT.filter((proyecto, index, array) =>
        {
            return proyecto.Nombre.indexOf(this.nombre) >= 0;
        });
    }
}
