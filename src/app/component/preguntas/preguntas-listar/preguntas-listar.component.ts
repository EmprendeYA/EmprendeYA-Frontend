import { Component, OnInit } from '@angular/core';
import { Preguntas } from 'src/app/model/preguntas';
import {MatTableDataSource} from '@angular/material/table'
import { PreguntasService } from 'src/app/service/preguntas.service';
import { MatDialog } from '@angular/material/dialog'
import { PreguntasDialogoComponent } from './component/preguntas-dialogo/preguntas-dialogo.component';

@Component({
  selector: 'app-preguntas-listar',
  templateUrl: './preguntas-listar.component.html',
  styleUrls: ['./preguntas-listar.component.css']
})
export class PreguntasListarComponent implements OnInit {
  lista: Preguntas[]=[]
  dataSource:MatTableDataSource <Preguntas> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[]=['Codigo', 'Nombre', 'Descripcion','acciones1','acciones2']

  constructor(private aS: PreguntasService, private dialog:MatDialog){

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
    this.dialog.open(PreguntasDialogoComponent);
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

