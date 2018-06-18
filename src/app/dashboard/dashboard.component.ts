import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
    selector : 'app-dashboard',
    templateUrl : './dashboard.component.html',
    styleUrls : ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit
{
    puesto: string;
    
    constructor (private http: HttpClient, private rd: Renderer2)
    {
    }
    
    esDesarrollador ()
    {
        return this.puesto === 'Desarrollador';
    }
    
    esRRHH ()
    {
        return this.puesto === 'RRHH';
    }
    
    esSupervisor ()
    {
        return this.puesto === 'Supervisor';
    }
    
    esAdministrador ()
    {
        return this.puesto === 'Administrador';
    }
    
    checarPuesto ()
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        const obj = this.http.get('http://' + environment.ip + ':5050/api/auth/decode/' + localStorage.getItem('token'),
            {headers : headers})
                        .subscribe(data =>
                        {
                            this.puesto = (data as any).puesto as string;
                        }, error =>
                        {
            
                        });
    }
    
    ngOnInit ()
    {
    }
    
    ngAfterViewInit ()
    {
    }
    
    
}
