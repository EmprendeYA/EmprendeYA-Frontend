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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
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

import { ResenaListarComponent } from './component/resena/resena-listar/resena-listar.component';
import { ResenaCreaeditaComponent } from './component/resena/resena-creaedita/resena-creaedita.component';
import { ResenaDialogoComponent } from './component/resena/resena-dialogo/resena-dialogo.component';
import { HomeComponent } from './component/home/home.component';
import { TcomunicacionComponent } from './component/tcomunicacion/tcomunicacion.component';
import { tcomunicacionListarComponent } from './component/tcomunicacion/tcomunicacion-listar/tcomunicacion-listar.component';
import { tcomunicacioncreaeditacomponent } from './component/tcomunicacion/tcomunicacion-creaedita/tcomunicacion-creaedita.component';
import { TcomunicacionDialogoComponent } from './component/tcomunicacion/tcomunicacion-dialogo/tcomunicacion-dialogo.component';
import { MatSelectModule } from '@angular/material/select';
import { TipodeContenidoComponent } from './component/TipodeContenido/TipodeContenido.component';
import { TipodeContenidoListarComponent } from './component/TipodeContenido/TipodeContenido-listar/TipodeContenido-listar.component';
import { TipodeContenidoCreaeditaComponent } from './component/TipodeContenido/TipodeContenido-creaedita/TipodeContenido-creaedita.component';
import { TipodeContenidoDialogoComponent } from './component/TipodeContenido/TipodeContenido-dialogo/TipodeContenido-dialogo.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './component/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

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
    ResenaListarComponent,
    ResenaCreaeditaComponent,
    ResenaDialogoComponent,
    HomeComponent,
    TcomunicacionComponent,
    tcomunicacionListarComponent,
    tcomunicacioncreaeditacomponent,
    TcomunicacionDialogoComponent,
    TipodeContenidoComponent,
    TipodeContenidoListarComponent,
    TipodeContenidoCreaeditaComponent,
    TipodeContenidoDialogoComponent,
    LoginComponent,
    ToolbarComponent
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
    MatIconModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
