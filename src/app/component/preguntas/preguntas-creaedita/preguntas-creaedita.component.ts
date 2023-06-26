import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Preguntas } from 'src/app/model/preguntas';
import * as moment from 'moment';
import { PreguntasService } from 'src/app/service/preguntas.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Benefactor } from 'src/app/model/benefactor';
import { BenefactorService } from 'src/app/service/benefactor.service';
import { EmprendedorService } from 'src/app/service/emprendedor.service';
import { Emprendedor } from 'src/app/model/emprendedor';

@Component({
  selector: 'app-preguntas-creaedita',
  templateUrl: './preguntas-creaedita.component.html',
  styleUrls: ['./preguntas-creaedita.component.css'],
})
export class PreguntasCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  preguntas: Preguntas = new Preguntas();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  lista: Benefactor[]=[];
  lista1: Emprendedor[]=[];
  idBenefactorSeleccionado: number =0;
  idEmprendedorSeleccionado: number =0;

  constructor(
    private aS: PreguntasService,
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
      namePregunta: new FormControl(),
      descripcion: new FormControl(),
      benefactor :new FormControl(),
      emprendedor :new FormControl()
    });
  }
  aceptar(): void {
    this.preguntas.id = this.form.value['id'];
    this.preguntas.namePregunta = this.form.value['namePregunta'];
    this.preguntas.descripcion = this.form.value['descripcion'];
    this.preguntas.benefactor.nameBenefactor=this.form.value['benefactor.nameBenefactor'];
    this.preguntas.emprendedor.nombreEmprendedor=this.form.value['emprendedor.nombreEmprendedor']

    if (this.idBenefactorSeleccionado>0 && this.idEmprendedorSeleccionado>0)  {
      let b = new Benefactor();
      b.id = this.idBenefactorSeleccionado;
      this.preguntas.benefactor=b;
      let e = new Emprendedor();
      e.id = this.idEmprendedorSeleccionado;
      this.preguntas.emprendedor=e;
      this.aS.insert(this.preguntas).subscribe(() => {
      this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
  }
    if (
      this.form.value['namePregunta'].length > 0 &&
      this.form.value['descripcion'].length > 0
    ) {
      if (this.edicion) {
        this.aS.update(this.preguntas).subscribe((data)=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      } else{
        /*this.aS.insert(this.preguntas).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          })
        })*/
      }
      this.router.navigate(['preguntas']);
    } else {
      this.mensaje = 'Complete todos los campos requeridos';
    }
  }
  init(){
    if(this.edicion){
      this.aS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
            id:new FormControl(data.id),
            namePregunta: new FormControl(data.namePregunta),
            descripcion: new FormControl(data.descripcion),
            benefactor:new FormControl(data.benefactor.nameBenefactor),
            emprendedor:new FormControl(data.emprendedor.nombreEmprendedor)
        })
      })
    }
  }
}

