import {Component, OnInit} from '@angular/core';
import {Perfil} from './models/perfilModel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PerfilResponse} from './models/perfilResponse';

@Component({
    selector : 'app-editar-perfil',
    templateUrl : './editar-perfil.component.html',
    styleUrls : ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit
{
    
    perfilesAMostrar: Perfil[] = null;
    perfilesTotales: Perfil[] = null;
    
    perfilNameText: string;
    
    constructor (private http: HttpClient)
    {
    }
    
    ngOnInit ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.get<PerfilResponse>('http://' + environment.ip + ':5050/api/perfil', {headers : headers}).subscribe(data =>
        {
            this.perfilesTotales = data.perfiles;
            for (let i = 0; i < this.perfilesTotales.length; i++)
            {
                this.perfilesTotales[i].activar = true;
            }
            this.perfilesAMostrar = this.perfilesTotales.slice(0);
            
        }, error =>
        {
            console.log(error);
            alert('No se pudo obtener información de las tablas');
        });
    }
    
    filtrar ()
    {
        if (this.perfilNameText === '')
        {
            this.perfilesAMostrar = this.perfilesTotales;
            return;
        }
        this.perfilesAMostrar = this.perfilesTotales.filter((perfil, index, array) =>
        {
            return perfil.Usuario.indexOf(this.perfilNameText) >= 0;
        });
    }
    
}
