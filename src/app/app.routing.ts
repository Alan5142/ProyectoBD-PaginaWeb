import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ShowProjectsComponent} from './show-projects/show-projects.component';
import {FindProjectsComponent} from './find-projects/find-projects.component';

const routes: Routes = [
    {path : '', redirectTo : 'home/index', pathMatch : 'full'},
    {
        path : 'home', children : [
            {path : 'index', component : HomeComponent},
            {path : 'login', component : LoginComponent},
            {path : 'projects', component : ShowProjectsComponent},
            {path : 'search-projects/:nombre', component : FindProjectsComponent}
        ]
    },
    {path : '**', component : NotFoundComponent}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes);
