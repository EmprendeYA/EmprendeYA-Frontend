import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Benefactor } from 'src/app/model/benefactor';
import { Emprendedor } from 'src/app/model/emprendedor';
import { BenefactorService } from 'src/app/service/benefactor.service';
import { EmprendedorService } from 'src/app/service/emprendedor.service';

@Component({
  selector: 'app-emprendedor-creaedita',
  templateUrl: './emprendedor-creaedita.component.html',
  styleUrls: ['./emprendedor-creaedita.component.css']
})
export class EmprendedorCreaeditaComponent implements OnInit{
form:FormGroup=new FormGroup({});
emprendedor: Emprendedor=new Emprendedor();
mensaje: string ="";
id:number=0;
edicion: boolean=false;
lista: Benefactor[]=[];
idBenefactorSeleccionado: number =0;


constructor(private eS:EmprendedorService,
  private router: Router,
  private route:ActivatedRoute, private bS:BenefactorService){

}
ngOnInit():void{
  this.bS.list().subscribe(data => { this.lista = data });
this.route.params.subscribe((data:Params)=>{
this.id=data['id'];
this.edicion=data['id']!=null;
this.init();
})

this.form=new FormGroup({
id:new FormControl(),
rubroEmprendedor :new FormControl(),
nombreEmprendedor:new FormControl(),
apellidoEmprendedor:new FormControl(),
edadEmprendedor:new FormControl(),
benefactor :new FormControl()
});
}
aceptar(): void{
  this.emprendedor.id=this.form.value['id'];
  this.emprendedor.rubroEmprendedor=this.form.value['rubroEmprendedor'];
  this.emprendedor.nombreEmprendedor=this.form.value['nombreEmprendedor'];
  this.emprendedor.apellidoEmprendedor=this.form.value['apellidoEmprendedor'];
  this.emprendedor.edadEmprendedor=this.form.value['edadEmprendedor'];
  this.emprendedor.benefactor.nameBenefactor=this.form.value['benefactor.nameBenefactor']
  if (this.idBenefactorSeleccionado>0) {
    let b = new Benefactor();
    b.id = this.idBenefactorSeleccionado;
    this.emprendedor.benefactor=b;
    this.eS.insert(this.emprendedor).subscribe(() => {
    this.eS.list().subscribe(data => {
          this.eS.setlist(data);
        })
      })
}
if(this.form.value['nombreEmprendedor'].length>0 && this.form.value['apellidoEmprendedor'].length>0){

if(this.edicion){
this.eS.update(this.emprendedor).subscribe(()=>{

  this.eS.list().subscribe(data=>{
    this.eS.setlist(data);
  })
})

}else{
  
}
    this.router.navigate(['emprendedor']);

}else{
this.mensaje="Complete los datos"
}
}

init(){
  if(this.edicion){
    this.eS.listId(this.id).subscribe(data=>{
      this.form=new FormGroup({
        id:new FormControl(data.id),
        rubroEmprendedor:new FormControl(data.rubroEmprendedor),
        nombreEmprendedor:new FormControl(data.nombreEmprendedor),
        apellidoEmprendedor:new FormControl(data.apellidoEmprendedor),
        edadEmprendedor:new FormControl(data.edadEmprendedor),
        benefactor:new FormControl(data.benefactor.nameBenefactor)
        })
      })
    }
  }
}


