import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { TipoComunicacion } from 'src/app/model/TipoComunicacion';
import { tcomunicacionService } from 'src/app/service/tcomunicacion.service';

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

  constructor(
    private aS: tcomunicacionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      nameTC: new FormControl(),
      descripcionTC: new FormControl(),
    });
  }
  aceptar(): void {
    this.Tcomunicacion.id = this.form.value['id'];
    this.Tcomunicacion.nameTC = this.form.value['nameTC'];
    this.Tcomunicacion.descripcionTC = this.form.value['descripcionTC'];
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
        this.aS.insert(this.Tcomunicacion).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          })
        })
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
        })
      })
    }
  }
}
