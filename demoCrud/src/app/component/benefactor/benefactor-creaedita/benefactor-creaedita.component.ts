import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Benefactor } from 'src/app/model/benefactor';
import * as moment from 'moment';
import { BenefactorService } from 'src/app/service/benefactor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-benefactor-creaedita',
  templateUrl: './benefactor-creaedita.component.html',
  styleUrls: ['./benefactor-creaedita.component.css'],
})
export class BenefactorCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  benefactor: Benefactor = new Benefactor();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private aS: BenefactorService,
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
      nameBenefactor: new FormControl(),
      ocupation: new FormControl(),
      interest: new FormControl(),
    });
  }
  aceptar(): void {
    this.benefactor.id = this.form.value['id'];
    this.benefactor.nameBenefactor = this.form.value['nameBenefactor'];
    this.benefactor.ocupation = this.form.value['ocupation'];
    this.benefactor.interest = this.form.value['interest'];
    
    if (
      this.form.value['nameBenefactor'].length > 0 &&
      this.form.value['ocupation'].length > 0 &&
      this.form.value['interest'].length > 0
    ) {
      if (this.edicion) {
        this.aS.update(this.benefactor).subscribe((data)=>{
          this.aS.list().subscribe(data=>{
            this.aS.setList(data);
          })
        })
      } else{
        this.aS.insert(this.benefactor).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['benefactors']);
    } else {
      this.mensaje = 'Complete todos los campos requeridos';
    }
  }
  init(){
    if(this.edicion){
      this.aS.listId(this.id).subscribe(data=>{
        this.form=new FormGroup({
            id:new FormControl(data.id),
            nameBenefactor: new FormControl(data.nameBenefactor),
            ocupation: new FormControl(data.ocupation),
            interest: new FormControl(data.interest)
        })
      })
    }
  }
}
