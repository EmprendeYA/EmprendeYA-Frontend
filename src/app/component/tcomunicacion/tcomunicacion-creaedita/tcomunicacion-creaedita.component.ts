import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { TipoComunicacion } from 'src/app/model/TipoComunicacion';
import { tcomunicacionService } from 'src/app/service/tcomunicacion.service';
import { Benefactor } from 'src/app/model/benefactor';
import { BenefactorService } from 'src/app/service/benefactor.service';
import { EmprendedorService } from 'src/app/service/emprendedor.service';
import { Emprendedor } from 'src/app/model/emprendedor';

@Component({
  selector: 'app-tcomunicacion-creaedita',
  templateUrl: './tcomunicacion-creaedita.component.html',
  styleUrls: ['./tcomunicacion-creaedita.component.css'],
})
export class tcomunicacioncreaeditacomponent implements OnInit {
  form: FormGroup = new FormGroup({});
  Tcomunicacion: TipoComunicacion = new TipoComunicacion();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  lista: Benefactor[]=[];
  lista1: Emprendedor[]=[];
  idBenefactorSeleccionado: number =0;
  idEmprendedorSeleccionado: number =0;
  constructor(
    private aS: tcomunicacionService,
    private router: Router,
    private route: ActivatedRoute, private bS:BenefactorService, private eS:EmprendedorService
  ) {}

  ngOnInit(): void {
    this.bS.list().subscribe(data => { this.lista = data });
    this.eS.list().subscribe(data => { this.lista1 = data });
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      nameTC: new FormControl(),
      descripcionTC: new FormControl(),
      benefactor :new FormControl(),
      emprendedor :new FormControl()
    });
  }
  aceptar(): void {
    this.Tcomunicacion.id = this.form.value['id'];
    this.Tcomunicacion.nameTC = this.form.value['nameTC'];
    this.Tcomunicacion.descripcionTC = this.form.value['descripcionTC'];
    this.Tcomunicacion.benefactor.nameBenefactor=this.form.value['benefactor.nameBenefactor'];
    this.Tcomunicacion.emprendedor.nombreEmprendedor=this.form.value['emprendedor.nombreEmprendedor']
    if (this.idBenefactorSeleccionado>0 && this.idEmprendedorSeleccionado>0)  {
      let b = new Benefactor();
      b.id = this.idBenefactorSeleccionado;
      this.Tcomunicacion.benefactor=b;
      let e = new Emprendedor();
      e.id = this.idEmprendedorSeleccionado;
      this.Tcomunicacion.emprendedor=e;
      this.aS.insert(this.Tcomunicacion).subscribe(() => {
      this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
  }

  if (
      this.form.value['nameTC'].length > 0 &&
      this.form.value['descripcionTC'].length > 0
    ) {
      if (this.edicion) {
        this.aS.update(this.Tcomunicacion).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          })
        })
      } else {
        /*this.aS.insert(this.Tcomunicacion).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          })
        })*/
      }
      this.router.navigate(['TipodeComunicacion']);
    } else {
      this.mensaje = 'Complete todos los campos requeridos';
    }
  }
  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nameTC: new FormControl(data.nameTC),
          descripcionTC: new FormControl(data.descripcionTC),
          benefactor:new FormControl(data.benefactor.nameBenefactor),
          emprendedor:new FormControl(data.emprendedor.nombreEmprendedor)
        })
      })
    }
  }
}
