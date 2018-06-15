import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Software} from '../show-projects/models/software';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface SoftwareResponse
{
    message: string;
    softwares: Software[];
}


@Component({
    selector : 'app-find-projects',
    templateUrl : './find-projects.component.html',
    styleUrls : ['./find-projects.component.scss']
})


export class FindProjectsComponent implements OnInit
{
    listaSoftware: Software[];
    
    constructor (private route: ActivatedRoute, private http: HttpClient)
    {
    }
    
    ngOnInit ()
    {
        this.route.params.subscribe(res =>
        {
            console.log(res.nombre);
            const headers = new HttpHeaders().set('Content-Type', 'application/json');
            this.http.get<SoftwareResponse>('http://' + environment.ip + ':5050/api/software/buscar/' + res.nombre,
                {headers : headers})
                .subscribe(data =>
                {
                    this.listaSoftware = data.softwares;
                }, error =>
                {
                    console.log(error);
                    alert('No se pudo obtener información de las tablas');
                });
        });
    }
    
    
}
