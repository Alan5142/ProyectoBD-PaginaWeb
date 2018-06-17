import {NgForm} from '@angular/forms';
import {Component, Injectable, NgZone} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginForm} from './models/loginForm';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {RefreshTokenResponse} from './models/refreshToken';

export interface LoginResponse
{
    mensaje: string;
    numUsuario: number;
    usuario: string;
    puesto: string;
    token: string;
    refreshToken: string;
}

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.scss']
})

@Injectable()
export class LoginComponent
{
    LoginForm = new LoginForm();
    
    constructor (private http: HttpClient, private route: Router, private zone: NgZone)
    {
    }
    
    refrescarToken ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        this.http.post<RefreshTokenResponse>('http://' + environment.ip + ':5050/api/auth/refreshToken',
            {
                Usuario : localStorage.getItem('nombre'),
                Contrasena : localStorage.getItem('password'),
                refreshToken : localStorage.getItem('refreshToken')
            },
            {headers : headers}).subscribe(data =>
        {
            localStorage.setItem('token', data.token);
            //alert('Acceso autorizado');
            this.refresh();
            setInterval(this.refrescarToken(), 1000 * 60 * 5);
        }, error =>
        {
            alert('No se pudo iniciar sesión');
        });
    }
    
    IniciarSesion ()
    {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.post<LoginResponse>('http://' + environment.ip + ':5050/api/auth/login',
            {user : this.LoginForm.Usuario, password : this.LoginForm.Contrasena},
            {headers : headers}).subscribe(data =>
        {
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('id', data.numUsuario + '');
            localStorage.setItem('nombre', data.usuario);
            localStorage.setItem('password', this.LoginForm.Contrasena);
            this.refresh();
            setInterval(this.refrescarToken(), 1000 * 60 * 5);
        }, error =>
        {
            alert('No se pudo iniciar sesión');
        });
    }
    
    onSubmit (f: NgForm)
    {
        this.IniciarSesion();
    }
    
    refresh ()
    {
        this.zone.runOutsideAngular(() =>
        {
            location.assign('/usuario/perfil');
        });
    }
}
