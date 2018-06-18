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
import {AgregarUsuarioComponent} from './agregar-usuario/agregar-usuario.component';
import {CrearProyectoComponent} from './crear-proyecto/crear-proyecto.component';
import {EditarProyectoComponent} from './editar-proyecto/editar-proyecto.component';
import {EliminarPerfilComponent} from './eliminar-perfil/eliminar-perfil.component';
import {EditarPerfilComponent} from './editar-perfil/editar-perfil.component';
import {PerfilDetallesComponent} from './perfil-detalles/perfil-detalles.component';
import {AsignarTareasComponent} from './asignar-tareas/asignar-tareas.component';
import {EditarEmpleadoComponent} from './editar-empleado/editar-empleado.component';
import {RegistrarEsComponent} from './registrar-es/registrar-es.component';
import {InformacionEmpleadoComponent} from './informacion-empleado/informacion-empleado.component';
import {MostrarEsComponent} from './mostrar-es/mostrar-es.component';
import {MostrarPerfilesPasadosComponent} from './mostrar-perfiles-pasados/mostrar-perfiles-pasados.component';
import {MostrarCanceladosAtrasadosComponent} from './mostrar-cancelados-atrasados/mostrar-cancelados-atrasados.component';

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
        DashboardComponent,
        AgregarUsuarioComponent,
        CrearProyectoComponent,
        EditarProyectoComponent,
        EliminarPerfilComponent,
        EditarPerfilComponent,
        PerfilDetallesComponent,
        AsignarTareasComponent,
        EditarEmpleadoComponent,
        RegistrarEsComponent,
        InformacionEmpleadoComponent,
        MostrarEsComponent,
        MostrarPerfilesPasadosComponent,
        MostrarCanceladosAtrasadosComponent
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
