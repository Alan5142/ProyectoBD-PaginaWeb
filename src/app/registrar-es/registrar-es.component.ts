import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
    selector : 'app-registrar-es',
    templateUrl : './registrar-es.component.html',
    styleUrls : ['./registrar-es.component.scss']
})
export class RegistrarEsComponent implements OnInit
{
    idUsuario: number = Number(localStorage.getItem('id'));
    
    constructor (private http: HttpClient)
    {
    }
    
    ngOnInit ()
    {
    }
    
    registrar (tipo: string)
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.post('http://' + environment.ip + ':5050/api/private/entrada_salida/' + this.idUsuario,
            {
                tipo : tipo
            }, {headers : headers}).subscribe(data =>
        {
            alert('Se registro ' + tipo + ' con exito');
            
        }, error =>
        {
            alert('No se pudo registrar ' + tipo);
        });
    }
}
