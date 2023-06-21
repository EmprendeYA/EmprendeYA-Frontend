import { Component, OnInit } from '@angular/core';
import { Benefactor } from 'src/app/model/benefactor';
import {MatTableDataSource} from '@angular/material/table'
import { BenefactorService } from 'src/app/service/benefactor.service';
import { MatDialog } from '@angular/material/dialog'
import { BenefactorDialogoComponent } from './component/benefactor-dialogo/benefactor-dialogo.component';

@Component({
  selector: 'app-benefactor-listar',
  templateUrl: './benefactor-listar.component.html',
  styleUrls: ['./benefactor-listar.component.css']
})
export class BenefactorListarComponent implements OnInit {
  lista: Benefactor[]=[]
  dataSource:MatTableDataSource <Benefactor> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[]=['Codigo', 'Nombre', 'Ocupacion','Intereses','acciones1','acciones2']

  constructor(private aS: BenefactorService, private dialog:MatDialog){

  }
  ngOnInit():void{
this.aS.list().subscribe(data=>{
  this.dataSource= new MatTableDataSource(data);
})
this.aS.getList().subscribe(data=>{
  this.dataSource=new MatTableDataSource(data);
})

this.aS.getConfirmDelete().subscribe(data =>{
  data==true ? this.eliminar(this.idMayor): false;
})
  }
  confirm(id:number){
    this.idMayor=id;
    this.dialog.open(BenefactorDialogoComponent);
  }
eliminar(id:number){
  this.aS.delete(id).subscribe(()=>{
    this.aS.list().subscribe(data =>{
      this.aS.setList(data);
    })
  })
}
filtrer(e:any){
  this.dataSource.filter=e.target.value.trim();
}
}
