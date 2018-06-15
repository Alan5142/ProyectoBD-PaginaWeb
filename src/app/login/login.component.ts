import {NgForm} from '@angular/forms';
import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginForm} from './models/loginForm';
import {environment} from '../../environments/environment';

export interface LoginResponse
{
    mensaje: string;
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

    constructor (private http: HttpClient)
    {
    }

    IniciarSesion ()
    {
        console.log(this.http);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http.post<LoginResponse>('http://' + environment.ip + ':5050/api/auth/login',
            {user : this.LoginForm.Usuario, password : this.LoginForm.Contrasena},
            {headers : headers}).subscribe(data =>
        {
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            alert('Acceso autorizado');
        }, error =>
        {
            alert('No se pudo iniciar sesión');
        });
    }

    onSubmit (f: NgForm)
    {
        this.IniciarSesion();
        console.log(this.LoginForm);
        console.log(f);
    }
}
