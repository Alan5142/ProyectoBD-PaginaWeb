import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Software} from './models/software';
import {environment} from '../../environments/environment';

interface SoftwareResponse
{
    message: string;
    desarrollos: Software[];
}


@Component({
    selector : 'app-show-projects',
    templateUrl : './show-projects.component.html',
    styleUrls : ['./show-projects.component.scss']
})

export class ShowProjectsComponent implements OnInit
{
    listaSoftware: Software[];
    
    constructor (private http: HttpClient)
    {
    }
    
    fetchProjects ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.get<SoftwareResponse>('http://' + environment.ip + ':5050/api/software', {headers : headers}).subscribe(data =>
        {
            this.listaSoftware = data.desarrollos;
        }, error =>
        {
            alert('No se pudo obtener información de las tablas');
        });
    }
    
    ngOnInit ()
    {
        this.fetchProjects();
    }
    
    
}
