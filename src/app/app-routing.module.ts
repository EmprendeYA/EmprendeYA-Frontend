import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefactorComponent } from './component/benefactor/benefactor.component';
import { BenefactorCreaeditaComponent } from './component/benefactor/benefactor-creaedita/benefactor-creaedita.component';
import { PreguntasComponent } from './component/preguntas/preguntas.component';
import { PreguntasCreaeditaComponent } from './component/preguntas/preguntas-creaedita/preguntas-creaedita.component';
import { EmprendedorComponent } from './component/emprendedor/emprendedor.component';
import { EmprendedorCreaeditaComponent } from './component/emprendedor/emprendedor-creaedita/emprendedor-creaedita.component';
import { UserComponent } from './component/user/user.component';
import { UserCreareditaComponent } from './component/user/user-crearedita/user-crearedita.component';
import { ResenaComponent } from './component/resena/resena.component';
import { ResenaCreaeditaComponent } from './component/resena/resena-creaedita/resena-creaedita.component';
import { HomeComponent } from './component/home/home.component';
import { TcomunicacionComponent } from './component/tcomunicacion/tcomunicacion.component';
import { tcomunicacioncreaeditacomponent } from './component/tcomunicacion/tcomunicacion-creaedita/tcomunicacion-creaedita.component';
import { ComunicacionComponent } from './component/comunicacion/comunicacion.component';
import { ComunicacionCreaeditaComponent } from './component/comunicacion/comunicacion-creaedita/comunicacion-creaedita.component';

const routes: Routes = [
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
    path: 'users',
    component: UserComponent,
    children: [
      { path: 'nuevo', component: UserCreareditaComponent },
      { path: 'edicion/:id', component: UserCreareditaComponent },
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
    path: '',
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
    path: 'comunicaciones', component: ComunicacionComponent, children: [
      { path: 'nuevo', component: ComunicacionCreaeditaComponent},
      { path: 'edicion/:id', component: ComunicacionCreaeditaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
