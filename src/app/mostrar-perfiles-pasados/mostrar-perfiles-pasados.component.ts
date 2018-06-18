import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PerfilesPasadosModel, PerfilesPasadosResponse} from './models/perfilesPasadosModel';

@Component({
    selector : 'app-mostrar-perfiles-pasados',
    templateUrl : './mostrar-perfiles-pasados.component.html',
    styleUrls : ['./mostrar-perfiles-pasados.component.scss']
})
export class MostrarPerfilesPasadosComponent implements OnInit
{
    
    listaPP: PerfilesPasadosModel[];
    listaPPAMostrar: PerfilesPasadosModel[];
    nombre: string;
    
    constructor (private http: HttpClient)
    {
    }
    
    fetchProjects ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.get<PerfilesPasadosResponse>('http://' + environment.ip + ':5050/api/private/perfilesPasados', {headers : headers})
            .subscribe(data =>
            {
                console.log(data);
                this.listaPP = data.perfiles_pasados;
                this.listaPPAMostrar = this.listaPP.slice(0);
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
            this.listaPPAMostrar = this.listaPP;
            return;
        }
        this.listaPPAMostrar = this.listaPP.filter((registro, index, array) =>
        {
            return registro.Nombre === this.nombre;
        });
    }
    
}
