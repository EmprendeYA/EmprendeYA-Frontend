import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Resena } from 'src/app/model/resena';
import { ResenaService } from 'src/app/service/resena.service';
import { EmprendedorService } from 'src/app/service/emprendedor.service';
import { Emprendedor } from 'src/app/model/emprendedor';

@Component({
  selector: 'app-resena-creaedita',
  templateUrl: './resena-creaedita.component.html',
  styleUrls: ['./resena-creaedita.component.css']
})
export class ResenaCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  resena: Resena = new Resena();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;
  lista1: Emprendedor[]=[];
  idEmprendedorSeleccionado: number =0;
  constructor(
    private rS: ResenaService,
    private router: Router,
    private route: ActivatedRoute, private eS:EmprendedorService) { }

   ngOnInit(): void {
    this.eS.list().subscribe(data => { this.lista1 = data });
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init()
    });
    this.form = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl(),
      emprendedor :new FormControl()
    })
  }
  aceptar(): void {
    this.resena.id = this.form.value['id'];
    this.resena.descripcion = this.form.value['descripcion'];
    this.resena.emprendedor.nombreEmprendedor=this.form.value['emprendedor.nombreEmprendedor']

    if (this.idEmprendedorSeleccionado>0)  {
      let e = new Emprendedor();
      e.id = this.idEmprendedorSeleccionado;
      this.resena.emprendedor=e;
      this.rS.insert(this.resena).subscribe(() => {
      this.rS.list().subscribe(data => {
            this.rS.setList(data);
          })
        })
  }


    if (this.form.value['descripcion'].length > 0 ) {
      if (this.edicion) {
        this.rS.update(this.resena).subscribe((data) => {
          this.rS.list().subscribe(data => {
            this.rS.setList(data)
          })
        })
      } else {
        /*this.rS.insert(this.resena).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          })
        })*/
      }
      this.router.navigate(['resenas']);
    } else {
      this.mensaje = "Complete todos los campos requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.rS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          descripcion: new FormControl(data.descripcion),
          emprendedor:new FormControl(data.emprendedor.nombreEmprendedor)
        })
      })
    }
  }
}
