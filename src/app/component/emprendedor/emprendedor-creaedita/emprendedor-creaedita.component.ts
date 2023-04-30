import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Emprendedor } from 'src/app/model/emprendedor';
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


constructor(private eS:EmprendedorService, private router: Router, private route:ActivatedRoute){

}
ngOnInit():void{
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
});
}
aceptar(): void{
  this.emprendedor.id=this.form.value['id'];
  this.emprendedor.rubroEmprendedor=this.form.value['rubroEmprendedor'];
  this.emprendedor.nombreEmprendedor=this.form.value['nombreEmprendedor'];
  this.emprendedor.apellidoEmprendedor=this.form.value['apellidoEmprendedor'];
  this.emprendedor.edadEmprendedor=this.form.value['edadEmprendedor'];

if(this.form.value['nombreEmprendedor'].length>0 && this.form.value['apellidoEmprendedor'].length>0){

if(this.edicion){
this.eS.update(this.emprendedor).subscribe(()=>{

  this.eS.list().subscribe(data=>{
    this.eS.setlist(data);
  })
})

}else{
  this.eS.insert(this.emprendedor).subscribe(data=>{
    this.eS.list().subscribe(data=> {
      this.eS.setlist(data);
    })

  })
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
        edadEmprendedor:new FormControl(data.edadEmprendedor)
        })
      })
    }
  }
}


