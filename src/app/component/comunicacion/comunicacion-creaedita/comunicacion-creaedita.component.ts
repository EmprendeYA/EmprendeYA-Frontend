import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Comunicacion } from 'src/app/model/comunicacion';
import { ComunicacionService } from 'src/app/service/comunicacion.service';
import { ActivatedRoute, Params, Router } from '@angular/router'
@Component({
  selector: 'app-comunicacion-creaedita',
  templateUrl: './comunicacion-creaedita.component.html',
  styleUrls: ['./comunicacion-creaedita.component.css']
})
export class ComunicacionCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  comunicacion: Comunicacion = new Comunicacion();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;
  constructor(private aS: ComunicacionService, private router: Router, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion=data['id']!=null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      nombreTipoComunicacion: new FormControl(),
      descripcionTipoComunicacion: new FormControl()
    })
  }
  aceptar(): void {
    this.comunicacion.id = this.form.value['id'];
    this.comunicacion.nombreTipoComunicacion = this.form.value['nombreTipoComunicacion'];
    this.comunicacion.descripcionTipoComunicacion = this.form.value['descripcionTipoComunicacion'];

    if (this.form.value['nombreTipoComunicacion'].length > 0 &&
      this.form.value['descripcionTipoComunicacion'].length > 0) {
      this.aS.insert(this.comunicacion).subscribe(data => {
        this.aS.list().subscribe(data => {
          this.aS.setList(data);
        })
      })
      this.router.navigate(['comunicaciones']);
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }
  init() {
    this.aS.listId(this.id).subscribe(data => {
      this.form = new FormGroup({
        id: new FormControl(data.id),
        nombreTipoComunicacion: new FormControl(data.nombreTipoComunicacion),
        descripcionTipoComunicacion: new FormControl(data.descripcionTipoComunicacion),
      })
    })
  }
}
