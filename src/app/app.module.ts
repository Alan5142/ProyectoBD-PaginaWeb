import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path : 'home', component : HomeComponent},
    {path : 'login', component : LoginComponent}
];


@NgModule({
    declarations : [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        HomeComponent
    ],
    imports : [
        BrowserModule,
        NgbModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot(routes, {useHash : true}),
        FormsModule
    ],
    providers : [],
    bootstrap : [AppComponent]
})

export class AppModule
{
}
