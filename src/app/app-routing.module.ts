import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefactorComponent } from './component/benefactor/benefactor.component';
import { BenefactorCreaeditaComponent } from './component/benefactor/benefactor-creaedita/benefactor-creaedita.component';
import { PreguntasComponent } from './component/preguntas/preguntas.component';
import { PreguntasCreaeditaComponent } from './component/preguntas/preguntas-creaedita/preguntas-creaedita.component';
import { EmprendedorComponent } from './component/emprendedor/emprendedor.component';
import { EmprendedorCreaeditaComponent } from './component/emprendedor/emprendedor-creaedita/emprendedor-creaedita.component';
import { ResenaComponent } from './component/resena/resena.component';
import { ResenaCreaeditaComponent } from './component/resena/resena-creaedita/resena-creaedita.component';
import { HomeComponent } from './component/home/home.component';
import { TcomunicacionComponent } from './component/tcomunicacion/tcomunicacion.component';
import { tcomunicacioncreaeditacomponent } from './component/tcomunicacion/tcomunicacion-creaedita/tcomunicacion-creaedita.component';
import { TipodeContenidoComponent } from './component/TipodeContenido/TipodeContenido.component';
import { TipodeContenidoCreaeditaComponent } from './component/TipodeContenido/TipodeContenido-creaedita/TipodeContenido-creaedita.component';
import { LoginComponent } from './component/login/login.component';
import { ReportesComponent } from './component/reportes/reportes.component';
import { Reporte9Component } from './component/reportes/reporte9/reporte9.component';
import { Reporte8Component } from './component/reportes/reporte8/reporte8.component';
const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'benefactors',
    component: BenefactorComponent,
    children: [
      { path: 'nuevo', component: BenefactorCreaeditaComponent },
      { path: 'edicion/:id', component: BenefactorCreaeditaComponent },
    ],
  },
  {
    path: 'preguntas',
    component: PreguntasComponent,
    children: [
      { path: 'nuevo', component: PreguntasCreaeditaComponent },
      { path: 'edicion/:id', component: PreguntasCreaeditaComponent },
    ],
  },
  {
    path: 'emprendedor',
    component: EmprendedorComponent,
    children: [
      { path: 'nuevo', component: EmprendedorCreaeditaComponent },
      { path: 'edicion/:id', component: EmprendedorCreaeditaComponent },
    ],
  },
  {
    path: 'resenas',
    component: ResenaComponent,
    children: [
      { path: 'nuevo', component: ResenaCreaeditaComponent },
      { path: 'edicion/:id', component: ResenaCreaeditaComponent },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'TipodeComunicacion',
    component: TcomunicacionComponent,
    children: [
      { path: 'nuevo', component: tcomunicacioncreaeditacomponent },
      { path: 'edicion/:id', component: tcomunicacioncreaeditacomponent },
    ],
  },
  {
    path: 'TipodeContenido',
    component: TipodeContenidoComponent,
    children: [
      { path: 'nuevo', component: TipodeContenidoCreaeditaComponent},
      { path: 'edicion/:idTipodeContenido', component: TipodeContenidoCreaeditaComponent }
    ]
  },
  {
    path:'reportes',component:ReportesComponent,children:[

    { path: 'reporte9', component: Reporte9Component },
    { path: 'reporte8', component: Reporte8Component },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
