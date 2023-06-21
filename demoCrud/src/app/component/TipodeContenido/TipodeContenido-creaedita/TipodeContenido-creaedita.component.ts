import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TipodeContenido } from 'src/app/model/TipodeContenido';
import { TipodeContenidoService } from 'src/app/service/TipodeContenido.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmprendedorService } from 'src/app/service/emprendedor.service';
import { Emprendedor } from 'src/app/model/emprendedor';
@Component({
  selector: 'app-TipodeContenido-creaedita',
  templateUrl: './TipodeContenido-creaedita.component.html',
  styleUrls: ['./TipodeContenido-creaedita.component.css']
})
export class TipodeContenidoCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  TipodeContenido: TipodeContenido = new TipodeContenido();
  mensaje: string = '';
  idTipodeContenido: number = 0;
  edicion: boolean = false;
  lista1: Emprendedor[]=[];
  idEmprendedorSeleccionado: number =0;

    constructor(
    private aS: TipodeContenidoService,
    private router: Router,
    private route: ActivatedRoute, private eS:EmprendedorService
  ) {}

  ngOnInit(): void {
    this.eS.list().subscribe(data => { this.lista1 = data });
    this.route.params.subscribe((data: Params) => {
      this.idTipodeContenido = data['idTipodeContenido'];
      this.edicion = data['idTipodeContenido'] != null;
      this.init();
    });
    this.form = new FormGroup({
      idTipodeContenido: new FormControl(),
      nombreTipodeContenido: new FormControl(),
      descripcionTipodeContenido: new FormControl(),
      emprendedor :new FormControl()
    });
  }
  aceptar(): void {
    this.TipodeContenido.idTipodeContenido = this.form.value['idTipodeContenido'];
    this.TipodeContenido.nombreTipodeContenido = this.form.value['nombreTipodeContenido'];
    this.TipodeContenido.descripcionTipodeContenido = this.form.value['descripcionTipodeContenido'];
    this.TipodeContenido.emprendedor.nombreEmprendedor=this.form.value['emprendedor.nombreEmprendedor']

    if (this.idEmprendedorSeleccionado>0)  {
      let e = new Emprendedor();
      e.id = this.idEmprendedorSeleccionado;
      this.TipodeContenido.emprendedor=e;
      this.aS.insert(this.TipodeContenido).subscribe(() => {
      this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
  }

    if (
      this.form.value['nombreTipodeContenido'].length > 0 &&
      this.form.value['descripcionTipodeContenido'].length > 0
    ) {
      if (this.edicion) {
        this.aS.update(this.TipodeContenido).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          })
        })
      } else {/*
        this.aS.insert(this.TipodeContenido).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          })
        })*/
      }
      this.router.navigate(['TipodeContenido']);
    } else {
      this.mensaje = 'Complete todos los campos requeridos';
    }
  }
  init() {
    if (this.edicion) {
      this.aS.listId(this.idTipodeContenido).subscribe((data) => {
        this.form = new FormGroup({
          idTipodeContenido: new FormControl(data.idTipodeContenido),
          nombreTipodeContenido: new FormControl(data.nombreTipodeContenido),
          descripcionTipodeContenido: new FormControl(data.descripcionTipodeContenido),
          emprendedor:new FormControl(data.emprendedor.nombreEmprendedor)
        })
      })
    }
  }
}
