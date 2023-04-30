import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BenefactorComponent } from './component/benefactor/benefactor.component';
import { PreguntasComponent } from './component/preguntas/preguntas.component';
import { EmprendedorComponent } from './component/emprendedor/emprendedor.component';
import { BenefactorListarComponent } from './component/benefactor/benefactor-listar/benefactor-listar.component';
import { PreguntasListarComponent } from './component/preguntas/preguntas-listar/preguntas-listar.component'
import { EmprendedorListarComponent } from './component/emprendedor/emprendedor-listar/emprendedor-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule} from '@angular/material/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BenefactorCreaeditaComponent } from './component/benefactor/benefactor-creaedita/benefactor-creaedita.component';
import { PreguntasCreaeditaComponent } from './component/preguntas/preguntas-creaedita/preguntas-creaedita.component';
import { EmprendedorCreaeditaComponent } from './component/emprendedor/emprendedor-creaedita/emprendedor-creaedita.component';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { BenefactorDialogoComponent } from './component/benefactor/benefactor-listar/component/benefactor-dialogo/benefactor-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PreguntasDialogoComponent } from './component/preguntas/preguntas-listar/component/preguntas-dialogo/preguntas-dialogo.component';
import { EmprendedorDialogoComponent } from './component/emprendedor/emprendedor-dialogo/emprendedor-dialogo.component';
import { ResenaComponent } from './component/resena/resena.component';
import { UserComponent } from './component/user/user.component';
import { ResenaListarComponent } from './component/resena/resena-listar/resena-listar.component';
import { ResenaCreaeditaComponent } from './component/resena/resena-creaedita/resena-creaedita.component';
import { ResenaDialogoComponent } from './component/resena/resena-dialogo/resena-dialogo.component';
import { UserListarComponent } from './component/user/user-listar/user-listar.component';
import { UserCreareditaComponent } from './component/user/user-crearedita/user-crearedita.component';
import { UserDialogoComponent } from './component/user/user-dialogo/user-dialogo.component';
import { HomeComponent } from './component/home/home.component';
import { TcomunicacionComponent } from './component/tcomunicacion/tcomunicacion.component';
import { tcomunicacionListarComponent } from './component/tcomunicacion/tcomunicacion-listar/tcomunicacion-listar.component';
import { tcomunicacioncreaeditacomponent } from './component/tcomunicacion/tcomunicacion-creaedita/tcomunicacion-creaedita.component';
import { TcomunicacionDialogoComponent } from './component/tcomunicacion/tcomunicacion-dialogo/tcomunicacion-dialogo.component';
import { ComunicacionComponent } from './component/comunicacion/comunicacion.component';
import { ComunicacionListarComponent } from './component/comunicacion/comunicacion-listar/comunicacion-listar.component';
import { ComunicacionCreaeditaComponent } from './component/comunicacion/comunicacion-creaedita/comunicacion-creaedita.component';
import { ComunicacionDialogoComponent } from './component/comunicacion/comunicacion-dialogo/comunicacion-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    BenefactorComponent,
    BenefactorListarComponent,
    BenefactorCreaeditaComponent,
    BenefactorDialogoComponent,
    PreguntasComponent,
    PreguntasListarComponent,
    PreguntasCreaeditaComponent,
    PreguntasDialogoComponent,
    EmprendedorComponent,
    EmprendedorListarComponent,
    EmprendedorCreaeditaComponent,
    EmprendedorDialogoComponent,
    ResenaComponent,
    UserComponent,
    ResenaListarComponent,
    ResenaCreaeditaComponent,
    ResenaDialogoComponent,
    UserListarComponent,
    UserCreareditaComponent,
    UserDialogoComponent,
    HomeComponent,
    TcomunicacionComponent,
    tcomunicacionListarComponent,
    tcomunicacioncreaeditacomponent,
    TcomunicacionDialogoComponent,
    ComunicacionComponent,
    ComunicacionListarComponent,
    ComunicacionCreaeditaComponent,
    ComunicacionDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
