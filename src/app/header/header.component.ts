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
    buscar: string = '';
    
    @ViewChild('loginButton')
    showLogin: ElementRef;
    
    @ViewChild('perfilDiv')
    perfilDiv: ElementRef;
    
    constructor (private http: HttpClient, private rd: Renderer2)
    {
    
    }
    
    
    checkToken ()
    {
        if (!localStorage.getItem('token'))
        {
            console.log('xd');
            this.showLogin.nativeElement.hidden = false;
            this.perfilDiv.nativeElement.hidden = true;
        }
        
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const obj = this.http.get('http://' + environment.ip + ':5050/api/auth/decode/' + localStorage.getItem('token'),
            {headers : headers})
                        .subscribe(data =>
                        {
                            console.log('dx');
                            this.showLogin.nativeElement.hidden = true;
                            this.perfilDiv.nativeElement.hidden = false;
                        }, error =>
                        {
                            console.log('D:');
                            this.showLogin.nativeElement.hidden = false;
                            this.perfilDiv.nativeElement.hidden = true;
                        });
    }
    
    ngOnInit ()
    {
    }
    
    ngAfterViewInit ()
    {
        this.checkToken();
    }
    
    salir ()
    {
        localStorage.clear();
    }
}
