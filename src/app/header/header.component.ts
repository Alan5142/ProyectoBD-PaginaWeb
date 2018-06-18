import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit
{
    @Input()
    buscar = '';
    
    @ViewChild('loginButton')
    showLogin: ElementRef;
    
    @ViewChild('perfilDiv')
    perfilDiv: ElementRef;
    
    @ViewChild('dashboard')
    dashboard: ElementRef;
    
    @ViewChild('imagenPerfil')
    imagenPerfil: ElementRef;
    
    usuario: string = localStorage.getItem('nombre');
    
    constructor (private http: HttpClient, private rd: Renderer2)
    {
    
    }
    
    
    checkToken (data: any)
    {
        if (data)
        {
            this.showLogin.nativeElement.hidden = true;
            this.perfilDiv.nativeElement.hidden = false;
        }
        else
        {
            this.showLogin.nativeElement.hidden = false;
            this.perfilDiv.nativeElement.hidden = true;
        }
    }
    
    checkDashboard (data: any)
    {
        this.dashboard.nativeElement.hidden = !(data);
    }
    
    ngOnInit ()
    {
    }
    
    ngAfterViewInit ()
    {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        const obj = this.http.get('http://' + environment.ip + ':5050/api/auth/decode/' + localStorage.getItem('token'),
            {headers : headers})
                        .subscribe(data =>
                        {
                            this.checkToken(data);
                            this.checkDashboard(data);
                        }, error =>
                        {
                            this.checkToken(null);
                            this.checkDashboard(null);
                        });
        this.imagenPerfil.nativeElement.src = 'http://' + environment.ip + ':5050/api/fotoPerfil/' + localStorage.getItem('id');
    }
    
    salir ()
    {
        localStorage.clear();
    }
    
    
}
