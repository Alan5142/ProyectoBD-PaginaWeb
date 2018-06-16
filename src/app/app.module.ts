import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import {ModuleRouting} from './app.routing';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ShowProjectsComponent} from './show-projects/show-projects.component';
import {FindProjectsComponent} from './find-projects/find-projects.component';
import {PerfilComponent} from './perfil/perfil.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
    declarations : [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        HomeComponent,
        NotFoundComponent,
        ShowProjectsComponent,
        FindProjectsComponent,
        PerfilComponent,
        DashboardComponent
    ],
    imports : [
        BrowserModule,
        NgbModule.forRoot(),
        HttpClientModule,
        FormsModule,
        ModuleRouting
    ],
    providers : [],
    bootstrap : [AppComponent]
})

export class AppModule
{
}
