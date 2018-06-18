import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {EntradaSalidaModel, EntradaSalidaResponse} from './models/entrada_salida';

@Component({
    selector : 'app-mostrar-es',
    templateUrl : './mostrar-es.component.html',
    styleUrls : ['./mostrar-es.component.scss']
})
export class MostrarEsComponent implements OnInit
{
    
    listaES: EntradaSalidaModel[];
    listaESAMostrar: EntradaSalidaModel[];
    Usuario: number;
    
    constructor (private http: HttpClient)
    {
    }
    
    fetchProjects ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', localStorage.getItem('token'));
        this.http.get<EntradaSalidaResponse>('http://' + environment.ip + ':5050/api/private/entrada_salida', {headers : headers})
            .subscribe(data =>
            {
                console.log(data);
                this.listaES = data.entradas_salidas;
                this.listaESAMostrar = this.listaES.slice(0);
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
        if (this.Usuario === null)
        {
            this.listaESAMostrar = this.listaES;
            return;
        }
        this.listaESAMostrar = this.listaES.filter((registro, index, array) =>
        {
            return registro.Perfil === this.Usuario;
        });
    }
}
